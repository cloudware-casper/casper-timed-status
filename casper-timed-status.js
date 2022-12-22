/*
 - Copyright (c) 2011-2022 Cloudware LDA. All rights reserved.
 -
 - This file is part of casper-timed-status.
 -
 - casper-timed-status is free software: you can redistribute it and/or modify
 - it under the terms of the GNU Affero General Public License as published by
 - the Free Software Foundation, either version 3 of the License, or
 - (at your option) any later version.
 -
 - casper-timed-status  is distributed in the hope that it will be useful,
 - but WITHOUT ANY WARRANTY; without even the implied warranty of
 - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 - GNU General Public License for more details.
 -
 - You should have received a copy of the GNU Affero General Public License
 - along with casper-timed-status.  If not, see <http://www.gnu.org/licenses/>.
 -
 */

import { html, css, svg, LitElement } from 'lit';
import { CasperIcon } from '@cloudware-casper/casper-icons/casper-icon.js';

CasperIcon.register('casper-timed-status:error', svg`
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48.9937 18.3511C49.0711 18.1399 49.275 18 49.5 18C49.725 18 49.9289 18.1399 50.0063 18.3511L50.9977 21.0002L53.6484 21.993C53.8594 22.0725 54 22.2743 54 22.5C54 22.7257 53.8594 22.9275 53.6484 23.007L50.9977 23.9998L50.0063 26.6484C49.9289 26.8594 49.725 27 49.5 27C49.275 27 49.0711 26.8594 48.9937 26.6484L48.0023 23.9998L45.2883 23.007C45.0773 22.9275 45 22.7257 45 22.5C45 22.2743 45.0773 22.0725 45.2883 21.993L48.0023 21.0002L48.9937 18.3511ZM38.3484 24.8463C39.2273 23.9681 40.6477 23.9681 41.5266 24.8463L43.5445 26.8664L44.768 25.643C45.2039 25.2 45.9211 25.2 46.357 25.643C46.8 26.0789 46.8 26.7961 46.357 27.232L45.1336 28.4555L47.1516 30.4734C48.0305 31.3523 48.0305 32.7727 47.1516 33.6516L46.3922 34.418C46.9477 35.9648 47.25 37.6383 47.25 39.375C47.25 47.4539 40.7039 54 32.625 54C24.5475 54 18 47.4539 18 39.375C18 31.2961 24.5475 24.75 32.625 24.75C34.3617 24.75 36.0352 25.0523 37.582 25.6148L38.3484 24.8463ZM24.6867 38.8125C24.6867 34.7766 28.0266 31.5 31.9992 31.5H32.5617C33.2438 31.5 33.6867 30.9938 33.6867 30.375C33.6867 29.7562 33.2438 29.25 32.5617 29.25H31.9992C26.782 29.25 22.4367 33.532 22.4367 38.8125V39.375C22.4367 39.9938 23.0034 40.5 23.5617 40.5C24.2466 40.5 24.6867 39.9938 24.6867 39.375V38.8125Z" fill="white"/>
      </svg>`);

CasperIcon.register('casper-timed-status:timeout', svg`
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 21.625C23 20.7279 23.7279 20 24.625 20H47.375C48.2755 20 49 20.7279 49 21.625C49 22.5221 48.2755 23.25 47.375 23.25H46.8333V24.5351C46.8333 27.2651 45.6891 29.8245 43.8203 31.8151L38.2953 37.3333L43.8203 42.8516C45.6891 44.7813 46.8333 47.4016 46.8333 50.1302V51.4167H47.375C48.2755 51.4167 49 52.1411 49 53.0417C49 53.9422 48.2755 54.6667 47.375 54.6667H24.625C23.7279 54.6667 23 53.9422 23 53.0417C23 52.1411 23.7279 51.4167 24.625 51.4167H25.1667V50.1302C25.1667 47.4016 26.2507 44.7813 28.181 42.8516L33.7047 37.3333L28.181 31.8151C26.2507 29.8245 25.1667 27.2651 25.1667 24.5351V23.25H24.625C23.7279 23.25 23 22.5221 23 21.625ZM43.5833 24.5351V23.25H28.4167V24.5351C28.4167 26.4025 29.1588 28.1927 30.4818 29.513L36 35.038L41.5182 29.513C42.8385 28.1927 43.5833 26.4025 43.5833 24.5351Z" fill="white"/>
      </svg>`);

CasperIcon.register('casper-timed-status:check', svg`
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.8457 45.4486L23.1745 39.5679C21.6085 37.944 21.6085 35.3111 23.1745 33.6872C24.7406 32.0633 27.2797 32.0633 28.8457 33.6872L31.6811 36.6278L42.6876 26.1839C44.2587 24.5922 46.7723 24.6074 48.3255 26.2179C49.8786 27.8285 49.8933 30.4349 48.3583 32.0641L34.5164 45.4486C33.7651 46.2297 32.7445 46.6681 31.6806 46.6667C30.6173 46.668 29.5969 46.2297 28.8457 45.4486Z" fill="white"/>
      </svg>`);

CasperIcon.register('casper-timed-status:cloud', svg`
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2564 32.3229C20.2534 32.8976 20.2505 33.4574 20.4042 33.998C17.7479 35.3912 16 38.1154 16 41.0387C16 45.4423 19.5812 49 24 49H47C51.975 49 56 46.396 56 41.4451C56 38.9497 55.0987 37.2304 53.0342 35.7554C53.0533 35.707 53.0722 35.6582 53.0907 35.609C53.5732 34.3283 53.5365 31.5191 52.2184 30.0652C51.0154 28.617 48.3438 28.184 47.1124 28.4852L47.1103 28.4813C45.6836 24.9035 43.3682 22.3494 39 22.0401C35.2688 21.7436 31.975 23.0968 30 25.8957C29.0603 25.6417 28.0438 25.3991 27 25.3991C24.0162 25.3991 20.2573 28.5153 20.2573 32.0823C20.2573 32.1624 20.2569 32.2423 20.2565 32.3218L20.2564 32.3229Z" fill="white"/>
      </svg>`);

class CasperTimedStatus extends LitElement {

  static properties = {
    state:    { type: String },
    timeout:  { type: Number },
    progress: { type: Number }
  }

  static styles = css`
    :host {
      display: flex;
      position: relative;
      width: 120px;
      height: 120px;
    }

    .hide {
      display: none;
    }

    .ball {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .ring {
      stroke: var(--casper-timed-status-ring-color, #999);
      stroke-width: 9;
      stroke-linecap: round;
      fill: transparent;
      transform-origin: 50px 50px;
    }

    .progress {
      stroke: var(--casper-timed-status-progress-color, #FFF);
    }

    .timer {
      fill: none;
      stroke: var(--casper-timed-status-countdown-color, #AAA);
      stroke-width: 44;
      transform: scale(-1,1) translate(-100%, 0px);
    }

    .timer-stopped {
      fill: var(--casper-timed-status-timeout-color, #D0021B);
    }

    .indeterminate {
      stroke-dasharray: 188.5;
      animation:
        pathStroke 3.75s infinite ease-in-out,
        pathRotate 7.5s infinite cubic-bezier(1,.5,0,.5);
    }

    @keyframes pathStroke {
      0% {  stroke-dashoffset: -188.5; }
      40%, 70% { stroke-dashoffset: 0; }
      100% { stroke-dashoffset: 188.5; }
    }

    @keyframes pathRotate {
      0% {  transform: rotate(0deg); }
      50% { transform: rotate(-540deg); }
      100% { transform: rotate(-1080deg); }
    }
  `

  constructor () {
    super();
    this.state    = 'idle';
    this.progress = undefined;
    this.timeout  = 30;
  }

  //***************************************************************************************//
  //                                ~~~ LIT life cycle ~~~                                 //
  //***************************************************************************************//

  willUpdate (changedProperties) {
    if ( changedProperties.has('state') ) {
      const style = window.getComputedStyle(this);
      switch (this.state) {
        case 'connecting':
          this.progress       = undefined;
          this._icon          = style.getPropertyValue('--casper-timed-status-icon').trim();
          this._progressClass = 'donut-ring ring progress indeterminate';
          this._borderClass   = 'donut-ring ring';
          this._timerClass    = 'timer';
          this._timer = setTimeout((e) => this.state = 'timeout', this.timeout * 1000);
          break;
        case 'connected':
          this._icon          = style.getPropertyValue('--casper-timed-status-icon').trim();
          this._progressClass = 'donut-ring ring progress';
          this._borderClass   = 'donut-ring ring';
          this._timerClass    = 'timer';
          if ( changedProperties.get('state') !== 'connecting' ) {
            this._timer = setTimeout((e) => this.state = 'timeout', this.timeout * 1000);
          }
          break;
        case 'in-progress':
          this._icon          = style.getPropertyValue('--casper-timed-status-icon').trim();
          this._progressClass = 'donut-ring ring progress';
          this._borderClass   = 'donut-ring ring';
          this._timerClass    = 'hide';
          clearTimeout(this._timer);
          this._timer = undefined;
          break;
        case 'success':
          this.progress       = 100;
          this._icon          = style.getPropertyValue('--casper-timed-status-icon-check').trim() || 'casper-timed-status:check'; // /static/icons/check
          this._progressClass = 'donut-ring ring progress';
          this._borderClass   = 'donut-ring ring';
          this._timerClass    = 'hide';
          clearTimeout(this._timer);
          this._timer = undefined;
          break;
        case 'error':
          this._icon          = style.getPropertyValue('--casper-timed-status-icon-error').trim() || 'casper-timed-status:error'; // /static/icons/error
          this._progressClass = 'hide';
          this._borderClass   = 'donut-ring ring timer-stopped';
          this._timerClass    = 'hide';
          clearTimeout(this._timer);
          this._timer = undefined;
          break;
        case 'timeout':
          this._icon          = style.getPropertyValue('--casper-timed-status-icon-timeout').trim() || 'casper-timed-status:timeout'; //''; '/static/icons/timeout';
          this._progressClass = 'hide';
          this._borderClass   = 'donut-ring ring timer-stopped';
          this._timerClass    = 'hide';
          clearTimeout(this._timer);
          this._timer = undefined;
          break;
        case 'pending':
          this._icon          = style.getPropertyValue('--casper-timed-status-icon-pending').trim() || 'casper-timed-status:cloud'; //''; '/static/icons/cloud';
          this._progressClass = 'hide';
          this._borderClass   = 'donut-ring ring';
          this._timerClass    = 'hide';
          clearTimeout(this._timer);
          this._timer = undefined;
          break;
        default:
          this._icon          = style.getPropertyValue('--casper-timed-status-icon').trim();
          this._progressClass = 'hide';
          this._borderClass   = 'donut-ring ring';
          this._timerClass    = 'hide';
          clearTimeout(this._timer);
          this._timer = undefined;
          break;
      }
    }
    if ( changedProperties.has('progress') ) {
      const p  = Math.PI * 2 * 45; // 45 is the radius of the circle in the svg

      if ( this.progress === undefined ) {
        this._fromDasharray = '0 ' + p;
        this._toDasharray   = '';
      } else {
        const p1 = this.progress / 100 * p;
        const p2 = p - p1;
        this._fromDasharray =  this._toDasharray || '0 ' + p;
        this._toDasharray   =  p1 + ' ' + p2;
      }
    }
  }

  render () {
    const tm = Math.PI * 2 * 22; // 45 is the radius of the timer circle
    const p  = Math.PI * 2 * 45; // 45 is the radius of the circle in the svg

    return html`
      <svg class="ball" viewBox="0 0 100 100">
        <circle class="${this._timerClass}" cx="50" cy="50" r="22" stroke-dasharray="0 ${tm}" stroke-dashoffset="${tm/4}">
          <animate id="t-anime"
                   attributeType="XML"
                   attributeName="stroke-dasharray"
                   dur="${this.timeout}s"
                   to="${tm} 0"
                   begin="indefinite">
          </animate>
        </circle>
        <circle class="${this._borderClass}" cx="50" cy="50" r="45"></circle>
        <circle class="${this._progressClass}"
                cx="50" cy="50" r="45" stroke-dasharray="${this._fromDasharray}" stroke-dashoffset="${p/4}">
          <animate id="p-anime"
            attributeType="XML"
            attributeName="stroke-dasharray"
            dur="1s"
            to="${this._toDasharray}"
            begin="indefinite"
            fill="freeze">
          </animate>
        </circle>
      </svg>
      <casper-icon class="ball" icon=${this._icon}></casper-icon>
    `;
  }

  firstUpdated () {
    this._progress = this.shadowRoot.getElementById('progress');
    this._panime   = this.shadowRoot.getElementById('p-anime'); // progress ring animation
    this._tanime   = this.shadowRoot.getElementById('t-anime'); // timer ring animation
  }

  updated (changedProperties) {
    if ( changedProperties.has('progress') ) {
      if ( this.progress !== undefined ) {
        this._panime.beginElement();
      }
    }
    if ( changedProperties.has('state') ) {
      switch (this.state) {
        case 'connecting':
          this._tanime.beginElement();
          break;
        case 'connected':
          if ( changedProperties.get('state') !== 'connecting' ) {
            this._tanime.beginElement();
          }
          break;
        default:
          this._tanime.endElement();
      }
    }
  }
}

window.customElements.define('casper-timed-status', CasperTimedStatus);