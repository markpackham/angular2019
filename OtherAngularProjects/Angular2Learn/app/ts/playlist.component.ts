import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Video} from "./video";

@Component({
    selector: "playlist",
    templateUrl: "app/templates/playlist.component.html"
})

export class PlaylistComponent {
    @Input() videos: Array<Video>;
    @Output() onSelectedVideo = new EventEmitter<Video>();
    currentVideo: Video;

    // Not really necessary but I don't want it to be null at the beginning so I set it to the first one in the list
    ngOnInit() {
        this.currentVideo = this.videos[0];
    }

    onSelect(video:Video) {
        this.onSelectedVideo.emit(video);
        this.currentVideo = video;
    }
}
