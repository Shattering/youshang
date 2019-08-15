import { Modal } from 'antd-mobile';
import React from 'react';
import CheckBox from './CheckBox'

function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
  while (el) {
    if (matchesSelector.call(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

class ChooseBetter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      data: localStorage
    };
  }
  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      modal1: true,
    });
  }
  onClose = key => () => {
    this.setState({
      modal1: false,
    });
  }

  onWrapTouchStart = (e) => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
      return;
    }
    const pNode = closest(e.target, '.am-modal-content');
    if (!pNode) {
      e.preventDefault();
    }
  }

  render() {
    return (
      <div>
        <p onClick={this.showModal('modal1')}>擅长科目<span>{this.state.data.better}</span></p>
        <Modal
          visible={this.state.modal1}
          transparent
          closable={true}
          onClose={this.onClose('modal1')}
          footer={[{ text: '提交', onPress: () => { this.onClose('modal1')(); } }]}
        >
          <div>
            <CheckBox></CheckBox>
          </div>
        </Modal>

      </div>
    );
  }
}

export default ChooseBetter