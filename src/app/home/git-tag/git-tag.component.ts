import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {$} from "protractor";

export enum TagType {
  IMPROVEMENT = 'Improvement', NEW_FEATURE = 'New feature', DATA_UPDATE = 'Data update', OTHER = ''
}

@Component({
  selector: 'app-git-tag',
  templateUrl: './git-tag.component.html',
  styleUrls: ['./git-tag.component.css']
})
export class GitTagComponent implements OnInit {

  @Input() tagData:any;

  TagType = TagType;

  tagType:TagType

  $tagDate:string;
  $tagAuthor:string;
  $tagDesc:string;


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.tagType = TagType.OTHER;
    if (this.tagData.name.startsWith("IMPROVEMENT_")) {
      this.tagType = TagType.IMPROVEMENT
    } else if (this.tagData.name.startsWith("FEATURE_")) {
      this.tagType = TagType.NEW_FEATURE
    } else if (this.tagData.name.startsWith("UPDATE_DATA")) {
      this.tagType = TagType.DATA_UPDATE;
    }

    this.http.get<any>(this.tagData.commit.url).subscribe(commit => {
      var tagdate = new Date(commit.commit.author.date);
      this.$tagDate = tagdate.toLocaleDateString("en-US", {weekday:'long', year:'numeric', month:'long', day:'numeric'});
      this.$tagAuthor = commit.commit.author.name;
      this.$tagDesc = commit.commit.message;
    })
  }

}
