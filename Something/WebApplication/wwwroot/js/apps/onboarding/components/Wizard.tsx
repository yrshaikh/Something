import * as React from "react";
import { Steps, Button, message } from "antd";

const Step = Steps.Step;

const steps = [{
    title: "Create a Company",
    content: "First-content",
}, {
    title: "Create a Project",
    content: "Second-content",
}, {
    title: "Create a Sprint",
    content: "Last-content",
}];

export class Wizard extends React.Component<Wizard.Props, Wizard.State> {
    constructor(props: Wizard.Props) {
        super(props);
        this.state = {
            currentIndex: 0,
        };
    }

    public next() {
        const current = this.state.currentIndex + 1;
        this.setState({ currentIndex: current });
    }

    public prev() {
        const current = this.state.currentIndex - 1;
        this.setState({ currentIndex: current });
    }

    public render() {
        const { currentIndex } = this.state;
        return (
            <div>
                <Steps current={currentIndex}>
                    {steps.map((item) => <Step key={item.title} title={item.title} />)}
                </Steps>
                <div className="steps-content">{steps[currentIndex].content}</div>
                <div className="steps-action">
                    {
                        currentIndex < steps.length - 1
                        && <Button type="primary" onClick={() => this.next()}>Next</Button>
                    }
                    {
                        currentIndex === steps.length - 1
                        && <Button type="primary" onClick={() => message.success("Processing complete!")}>Done</Button>
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
