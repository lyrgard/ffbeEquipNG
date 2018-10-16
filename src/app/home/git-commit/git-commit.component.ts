import {Component, Input, OnInit} from '@angular/core';

export enum CommitType {
  IMPROVEMENT = 'Improvement', NEW_FEATURE = 'New feature', DATA_UPDATE = 'Data update', OTHER = ''
}

@Component({
  selector: 'app-git-commit',
  templateUrl: './git-commit.component.html',
  styleUrls: ['./git-commit.component.css']
})
export class GitCommitComponent implements OnInit {

  @Input() commitData:any;

  CommitType = CommitType;

  commitType:CommitType

  $commitDesc:string;
  $commitDate:string;


  constructor() { }

  ngOnInit() {
    this.commitType = CommitType.OTHER;
    if (this.commitData.commit.message) {
      if (this.commitData.commit.message.startsWith("IMPROVEMENT")) {
        this.commitType = CommitType.IMPROVEMENT
      } else if (this.commitData.commit.message.startsWith("FEATURE")) {
        this.commitType = CommitType.NEW_FEATURE
      } else if (this.commitData.commit.message.startsWith("UPDATE_DATA")) {
        this.commitType = CommitType.DATA_UPDATE;
      }
    }
    this.$commitDate = new Date(this.commitData.commit.author.date).toLocaleDateString("en-US", {weekday:'long', year:'numeric', month:'long', day:'numeric'});
    this.$commitDesc = this.commitData.commit.message.substr(this.commitType.length);
  }

}
