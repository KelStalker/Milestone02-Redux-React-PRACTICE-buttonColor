import * as React from "react";
import { Fragment } from "react";
import { Grid, Button } from "semantic-ui-react";

export interface IAppProps {}

export default class App extends React.Component<IAppProps> {
  private incrementValueButtonClicked(): void { 
    console.log("Increment called")
    // this.props.actionCreatorForButtonIncrementValue
  }

  private decrementValueButtonClicked(): void {
    console.log("Decrement called")
  }

  private buttonTextColorChange(): void {
    console.log("button text color change");
  }

  public render() {
    return (
      <Fragment>
        <Grid>
          <Grid.Row centered>
            <h2>Cole's vid tutorial on Button color</h2>
          </Grid.Row>
          
          <Grid.Row centered>
            <Button
              content="Increment Value"
              onClick={() => this.incrementValueButtonClicked()}
              color="facebook"
            />

            <Button
              content="Decrement Value"
              onClick={() => this.decrementValueButtonClicked()}
              color="blue"
            />
          </Grid.Row>

<Grid.Row centered>
<Button content='This buttons text color will change'
/>
</Grid.Row>
<Grid.Row centered>
<h3>Current Count Value: 0</h3>
/>
</Grid.Row>


          <Grid.Row centered>
            <Button content="Button Text Color Change when clicked"
            onClick={() => this.buttonTextColorChange()}
            />
          </Grid.Row>
        </Grid>
      </Fragment>
    );
  }
}
