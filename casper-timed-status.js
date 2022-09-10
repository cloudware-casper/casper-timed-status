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
import '@cloudware-casper/casper-icons/casper-icon.js';

class CasperTimedStatus extends LitElement {

  static properties = {
    state: {
      type: String,
      reflect: false
    },
    timeout: {
      type: Number,
      reflect: false
    },
    progress: {
      type: Number,
      reflect: false
    },
    icon: {
      type: String,
      reflect: false
    },
    timer: {
      type: Boolean,
      reflect: false
    },
  }

  static styles = css`
    :host {
      display: flex;
      position: relative;
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
      stroke: #d2d3d4;
      stroke-width: 9;
      stroke-linecap: round;
      fill: transparent;
      transform-origin: 50px 50px;
    }

    .progress {
      stroke: var(--izibizi-primary-color);
    }

    .timer {
      stroke: #888;
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
    this.timer    = false;
    this.timeout  = 30;
  }

  //***************************************************************************************//
  //                                ~~~ LIT life cycle ~~~                                 //
  //***************************************************************************************//

  firstUpdated () {
    this._animation = this.shadowRoot.getElementById('timer-ring');
    this._icon      = this.icon;
  }

  willUpdate (changedProperties) {
    if ( changedProperties.has('state') ) {
      switch (this.state) {
        case 'connecting':
          this._pclass  = '';
          this._icon    = this.icon;
          this.progress = undefined;
          break;
        case 'connected':
          this._pclass  = '';
          this._icon    = this.icon;
          this.progress = 0;
          this._animation.beginElement();
          break;
        case 'success':
          this._icon   = '/static/icons/check';
          this._pclass = 'hide';
          break;
        case 'error':
          this._icon   = '/static/icons/error';
          this._pclass = 'hide';
          break;
        case 'timeout':
          this._icon   = '/static/icons/timeout';
          this._pclass = 'hide';
          break;
        default:
          this._icon   = this.icon;
          this._pclass = '';
          break;
      }
    }
  }

  render () {
    const p  = Math.PI * 2 * 45; // 45 is the radius of the circle in the svg
    const p1 = this.progress / 100 * p;
    const p2 = p - p1;

    return html`
      <casper-icon class="ball" icon=${this._icon}></casper-icon>
      <svg class="ball ${this._pclass}" viewBox="0 0 100 100">
        <circle class="donut-ring ring" cx="50" cy="50" r="45"></circle>
        ${this.progress === 0 ? '' : svg`
        <circle class="donut-ring ring ${this.timer ? 'progress' : 'timer'}" cx="50" cy="50" r="45" stroke-dasharray="0 ${p}" stroke-dashoffset="${p/4}">
          <animate id="timer-ring"
                   attributeType="XML"
                   attributeName="stroke-dasharray"
                   dur="${this.timeout}s"
                   to="${p} 0"
                   begin="indefinite">
          </animate>
        </circle>
        ${this.progress === undefined
          ? svg`<circle class="donut-ring ring progress indeterminate" cx="50" cy="50" r="45"></circle>`
          : svg`<circle class="donut-ring ring progress" cx="50" cy="50" r="45" stroke-dasharray="${p1} ${p2}" stroke-dashoffset="${p/4}"></circle>`
        }`}
      </svg>
    `;
  }
}

window.customElements.define('casper-timed-status', CasperTimedStatus);