import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

// Discord widget JSON doesn't give the user's role
// Hence the need to trace it manually...
const DISCORD_USER_ADMIN = ['Lyrgard#1585'];
const DISCORD_USER_KNOWLEDGEABLE = ['Darwe#7148', 'Spuuky#1546', 'tmtl#5880', 'Kujo#6865', 'sic#9510'];
const DISCORD_USER_DEVS = ['Indigo#1164', 'biovenger#4295', 'Xist#5200'];



@Component({
  selector: 'app-discord-users',
  templateUrl: './discord-users.component.html',
  styleUrls: ['./discord-users.component.css']
})
export class DiscordUsersComponent implements OnInit {

  adminNumber:number;
  knowledgableUsersNumber:number;
  developersNumber:number;
  otherMemberNumber:number;
  idleNumber:number;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>("https://discordapp.com/api/guilds/389844892853075969/widget.json").subscribe(data => {
      let adminsNb = 0, userNb = 0, knowledgeableNb = 0, devNb = 0, idleNb = 0;
      for (var id = 0; id < data.members.length; id++) {
        var member = data.members[id];
        if (member.status === 'online') {
          var memberName = member.username+'#'+member.discriminator;
          if (DISCORD_USER_ADMIN.includes(memberName)) {
            adminsNb++;
          } else if (DISCORD_USER_KNOWLEDGEABLE.includes(memberName)) {
            knowledgeableNb++;
          } else if (DISCORD_USER_DEVS.includes(memberName)) {
            devNb++;
          } else {
            userNb++;
          }
        } else {
          idleNb++;
        }
      }
      this.adminNumber = adminsNb;
      this.knowledgableUsersNumber = knowledgeableNb;
      this.developersNumber = devNb;
      this.otherMemberNumber = userNb;
      this.idleNumber = idleNb;
    })
  }

  itemPluralMapping = {
    'admin': {
      '=1' : '1 admin',
      'other' : '# admins'
    },
    'knowledgable user': {
      '=1' : '1 knowledgable user',
      'other' : '# knowledgable users'
    },
    'developer': {
      '=1' : '1 developer',
      'other' : '# developers'
    },
    'user': {
      '=1' : '1 user',
      'other' : '# users'
    },
    'idle': {
      '=1' : '1 idle',
      'other' : '# idles'
    },

  };
}
