import React from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: JSX.Element;
}

class Portal extends React.Component<Props> {
  el: HTMLDivElement;

  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount(): void {
    document.body.appendChild(this.el);
  }

  componentWillUnmount(): void {
    document.body.removeChild(this.el);
  }

  render(): React.ReactElement {
    const { children } = this.props;
    return createPortal(children, this.el);
  }
}

export default Portal;
