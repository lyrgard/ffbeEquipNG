import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription, fromEvent} from "rxjs/index";
import {debounceTime, distinctUntilChanged, throttleTime} from "rxjs/internal/operators";
import {$} from "protractor";
import {HttpClient} from "@angular/common/http";

// Discord widget JSON doesn't give the user's role
// Hence the need to trace it manually...
const DISCORD_USER_ADMIN = ['Lyrgard#1585'];
const DISCORD_USER_KNOWLEDGEABLE = ['Darwe#7148', 'Spuuky#1546', 'tmtl#5880', 'Kujo#6865', 'sic#9510'];
const DISCORD_USER_DEVS = ['Indigo#1164', 'biovenger#4295', 'Xist#5200'];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../assets/css-img/homepage-backgrounds.css', '../../assets/css-img/homepage.css', '../../assets/css-img/banner.css']
})
export class HomeComponent implements OnInit, OnDestroy {


  @ViewChild('layer2') layer2:ElementRef;
  @ViewChild('layer3') layer3:ElementRef;
  @ViewChild('layer4') layer4:ElementRef;
  @ViewChild('homePage') homePage:ElementRef;
  @ViewChild('layerBorder') layerBorder:ElementRef;
  @ViewChild('moreInformation') moreInformation:ElementRef;

  $gitTags:any[];

  private mouseMoveSubscription: Subscription;
  private documentScrollSubscription: Subscription;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.handleBackgroundAnimation();

    this.http.get<any[]>("https://api.github.com/repos/lyrgard/ffbeEquip/tags").subscribe(tags => {
      this.$gitTags = tags;//.slice(tags.length - 5);
    })


    // $.get("https://discordapp.com/api/guilds/389844892853075969/widget.json", function(widget) {
    //   var adminsNb = 0, userNb = 0, knowledgeableNb = 0, devNb = 0, idleNb = 0;
    //   for (var id = 0; id < widget.members.length; id++) {
    //     var member = widget.members[id];
    //     if (member.status === 'online') {
    //       var memberName = member.username+'#'+member.discriminator;
    //       if (DISCORD_USER_ADMIN.includes(memberName)) {
    //         adminsNb++;
    //       } else if (DISCORD_USER_KNOWLEDGEABLE.includes(memberName)) {
    //         knowledgeableNb++;
    //       } else if (DISCORD_USER_DEVS.includes(memberName)) {
    //         devNb++;
    //       } else {
    //         userNb++;
    //       }
    //     } else {
    //       idleNb++;
    //     }
    //   }
    //   var html = '';
    //   if (adminsNb > 0) {
    //     html += "<span class='discord-admin'>";
    //     html += "<span class='glyphicon glyphicon-king'></span>";
    //     html += adminsNb + " admin" + (adminsNb>1?'s':'');
    //     html += "</span>";
    //   }
    //   if (knowledgeableNb > 0) {
    //     html += "<span class='discord-knowledgeable'>";
    //     html += "<span class='glyphicon glyphicon-education'></span>";
    //     html += knowledgeableNb + " knowledgable user" + (knowledgeableNb>1?'s':'');
    //     html += "</span>";
    //   }
    //   if (devNb > 0) {
    //     html += "<span class='discord-developer'>";
    //     html += "<span class='glyphicon glyphicon-cog'></span>";
    //     html += devNb + " developer" + (devNb>1?'s':'');
    //     html += "</span>";
    //   }
    //   html += "<span class='discord-connected'>";
    //   html += "<span class='glyphicon glyphicon-user'></span>";
    //   html += userNb + " user" + (userNb>1?'s':'');
    //   html += "</span>";
    //   html += "<span class='discord-idle'>(and " + idleNb + " idle)</span>";
    //   $('#panel-discord .panel-body').html(html);
    // }, 'json').fail(function(jqXHR, textStatus, errorThrown ) {
    //   $('#panel-discord .panel-body').html("Error while loading list...");
    // });
  }

  ngOnDestroy(): void {
    if (this.mouseMoveSubscription) {
      this.mouseMoveSubscription.unsubscribe();
    }
    if (this.documentScrollSubscription) {
      this.documentScrollSubscription.unsubscribe();
    }
  }

  handleBackgroundAnimation() {
    let maxDeltaPx: number = 50;

    let scrollTop:number = 0;
    let pageX = 0
    let pageY = 0;

    let layers = [
      /* .layer-1 do not move, so is not present */

      // Layer 2, moves not much
      {
        $element: this.layer2.nativeElement,
        scrollSpeedFactor: 0.15,
        mouseSpeedFactor: 0.02,
        translate: { x: 0, y: 0 },
        initialOffset: { top: null, left: null},
        size: { height: null, width: null}
      },

      // Layer 3, moves a little
      {
        $element: this.layer3.nativeElement,
        scrollSpeedFactor: 0.25,
        mouseSpeedFactor: 0.10,
        translate: { x: 0, y: 0 },
        initialOffset: { top: null, left: null},
        size: { height: null, width: null}
      },

      // Layer 4, moves the most
      {
        $element: this.layer4.nativeElement,
        scrollSpeedFactor: 0.35,
        mouseSpeedFactor: 0.30,
        translate: { x: 0, y: 0 },
        initialOffset: { top: null, left: null},
        size: { height: null, width: null}
      },
    ];
    let maxLayers = layers.length;
    var maxScrollPosition = layers[maxLayers-1].$element.offsetTop;

    /* Init style for layers element */
    for (var layerId = 0; layerId < maxLayers ; layerId++) {
      layers[layerId].$element.setAttribute('style', 'transform: translate3d(0px, 0px, 0px)');
      layers[layerId].initialOffset.top = layers[layerId].$element.offsetTop;
      layers[layerId].initialOffset.left = layers[layerId].$element.offsetLeft;
      layers[layerId].size.height = layers[layerId].$element.outerHeight;
      layers[layerId].size.width = layers[layerId].$element.outerWidth;
    }

    let backgroundWidth = this.homePage.nativeElement.clientWidth;
    let backgroundHeight = this.homePage.nativeElement.clientHeight;
    let lastLayerVisibleYLimit = this.moreInformation.nativeElement.offsetTop - (this.layerBorder.nativeElement.outerHeight / 2);

    // Bail! Background will be fixed
    if (this.homePage.nativeElement.outerWidth < 770) return;

    /* Function to animate position */
    let animatePos = function() {
      var newTransform;
      for (var layerId = 0; layerId < maxLayers ; layerId++) {
        newTransform = 'translate3d(' + layers[layerId].translate.x + 'px, ' + layers[layerId].translate.y + 'px, 0px)';
        if (newTransform !== layers[layerId].$element.style.transform) {
          layers[layerId].$element.style.transform = newTransform;
        }
      }
    };

    /* Function to calculate position */
    let calculatePos = function() {
      var xPos, yPos, xPosStr, yPosStr, hasChanged = false;
      for (var layerId = 0; layerId < maxLayers ; layerId++) {
        // Handle mouse position
        xPos = maxDeltaPx * (pageX - (backgroundWidth / 2)) / backgroundWidth * layers[layerId].mouseSpeedFactor;
        yPos = maxDeltaPx * (pageY - (backgroundHeight / 2)) / backgroundHeight * layers[layerId].mouseSpeedFactor;
        // Handle scroll position, only in Y
        yPos -= (scrollTop * layers[layerId].scrollSpeedFactor);
        // Update x/y pos if changed
        xPosStr = xPos.toFixed(2);
        yPosStr = yPos.toFixed(2)
        if (layers[layerId].translate.x !== xPosStr || layers[layerId].translate.y !== yPosStr) {
          layers[layerId].translate.x = xPosStr;
          layers[layerId].translate.y = yPosStr;
          hasChanged = true;
        }
        // Check for visible limit
        if (layerId === maxLayers - 1) {
          var bottomPos = layers[layerId].initialOffset.top + yPos + layers[layerId].size.height;
          if (bottomPos < lastLayerVisibleYLimit) {
            hasChanged = false;
          }
        }
      }
      if (hasChanged) {
        window.requestAnimationFrame(animatePos);
      }
    };

    this.mouseMoveSubscription = fromEvent<MouseEvent>(this.homePage.nativeElement, 'mousemove').pipe(throttleTime(25), distinctUntilChanged()).subscribe(mouseEvent => {
      pageX = mouseEvent.pageX;
      pageY = mouseEvent.pageY;
      if (scrollTop < maxScrollPosition) {
        window.requestAnimationFrame(calculatePos);
      }
    });

    this.documentScrollSubscription = fromEvent<MouseEvent>(document, 'scroll').pipe(throttleTime(25), distinctUntilChanged()).subscribe(mouseEvent => {
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop < maxScrollPosition) {
        window.requestAnimationFrame(calculatePos);
      }
    });
  }
}
