import * as React from "react";
import { Steps, Button, message } from 'antd';

import './Wizard.scss';

const Step = Steps.Step;

const steps = [{
    title: 'Step 1',
    description: 'Set up the Company',
}, {
    title: 'Step 2',
    description: 'Create New Project',
}, {
    title: 'Step 3',
    description: 'Manage Sprints',
}];

export class Wizard extends React.Component<Wizard.Props, Wizard.State> {
    constructor(props: Wizard.Props) {
        super(props);
        this.state = {
            currentIndex: 0,
        };
    }

    next() {
        const current = this.state.currentIndex + 1;
        this.setState({ currentIndex: current });
    }

    prev() {
        const current = this.state.currentIndex - 1;
        this.setState({ currentIndex: current });
    }

    render() {
        const { currentIndex } = this.state;
        return (
            <div>
                <Steps current={currentIndex}>
                    {steps.map(item => <Step key={item.title} title={item.title} description={item.description} />)}
                </Steps>
                <div className="ant-steps__content">
                </div>
                <div className="ant-steps__action">
                    {
                        currentIndex < steps.length - 1
                        && <Button type="primary" onClick={() => this.next()}>Next</Button>
                    }
                    {
                        currentIndex === steps.length - 1
                        && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                    }
                    {
                        currentIndex > 0
                        && (
                            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                Previous
                            </Button>
                        )
                    }
                </div>
            </div>
        );
    }
}
