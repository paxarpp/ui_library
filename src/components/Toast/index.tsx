import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { IProps, IState } from './interface';
import { Wrapper, Animation, Div } from './style';

class Toast extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      items: [],
      timers: []
    };
  }

  public componentDidMount(): void {
    this.props.handlerAddToast(this.onAdd);
  }

  public componentWillUnmount(): void {
    const { timers } = this.state;
    timers.forEach(timer => {
      clearTimeout(timer);
    });
  }

  public onRemove = (id: number) => () => {
    if (id) {
      const { items } = this.state;
      this.setState({
        items: items.filter(itemId => itemId !== id)
      });
    }
  };

  public onAdd = () => {
    const { items } = this.state;
    this.setState(
      {
        items: items.concat(items[0] ? Math.max(...items) + 1 : 1)
      },
      () => {
        this.addTimer();
      }
    );
  };

  private addTimer = () => {
    const { items, timers } = this.state;
    const { duration = 3000 } = this.props;
    const timer = setTimeout(this.onRemove(items[items.length - 1]), duration);
    this.setState({ timers: timers.concat(timer) });
  }

  public render() {
    const { width = 100, height = 50, animationID = 'transitiongroup', children } = this.props;
    const { items } = this.state;
    return (
      <Wrapper>
        <TransitionGroup>
          {items.map(id => (
            <Animation key={id} className={animationID} timeout={800}>
              <Div width={width} height={height} onClick={this.onRemove(id)}>
                {children}
              </Div>
            </Animation>
          ))}
        </TransitionGroup>
      </Wrapper>
    );
  }
}

export default Toast;
