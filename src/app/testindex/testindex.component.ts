import { Component } from '@angular/core';
import {ConnectionService} from "ng-connection-service";

@Component({
  selector: 'app-root',
  templateUrl: './testindex.component.html',
})
export class DemoTabBarBasicComponent {
  hidden: boolean = false;
  fullScreen: boolean = false;
  topFlag: boolean = false;
  tintColor: string = '#108ee9';
  unselectedTintColor: string = '#888';

  isConnected = true;
  noInternetConnection: boolean;
  location: GeolocationPosition;
  constructor(private connectionService: ConnectionService) {
    this.connectionService.monitor().subscribe()
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.noInternetConnection=false;
      }
    else {
        this.noInternetConnection=true;
      }
    })
  }
  tabbarStyle: object = {
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0
  };
  selectedIndex: number = 0;
  public ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition)
    }
  }
  setPosition = (position) => {
    this.location = position;

  }
  showTabBar(event: { preventDefault: () => void; }) {
    event.preventDefault();
    this.hidden = !this.hidden;
  }

  showNextTabBar(event: { preventDefault: () => void; }) {
    event.preventDefault();
    const PANE_COUNT = 4;
    if (this.selectedIndex == PANE_COUNT - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
    console.log('selectedIndex: ', this.selectedIndex);
  }

  showFullScreen(event: { preventDefault: () => void; }) {
    event.preventDefault();
    this.fullScreen = !this.fullScreen;
    this.tabbarStyle = this.fullScreen
      ? {
        position: 'fixed',
        height: '100%',
        width: '100%',
        top: 0
      }
      : { height: '400px' };
  }

  changePosition(event: { preventDefault: () => void; }) {
    event.preventDefault();
    this.topFlag = !this.topFlag;
  }

  tabBarTabOnPress(pressParam: any) {
    console.log('onPress Params: ', pressParam);
    this.selectedIndex = pressParam.index;
  }
}
