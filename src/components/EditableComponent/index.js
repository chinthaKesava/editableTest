import {Component} from 'react'
import {
  MainContainer,
  CardContainer,
  Heading,
  InputContainer,
  InputField,
  TextField,
  Button,
} from './styledComponents'

class EditableComponent extends Component {
  state = {EditTest: '', isButtonClicked: false}

  onChangeSearchInput = event => {
    this.setState({EditTest: event.target.value})
    const {EditTest} = this.state
    console.log(EditTest)
  }

  onButtonClick = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {EditTest, isButtonClicked} = this.state
    const EditOrSaveButton = isButtonClicked ? 'edit' : 'save'
    return (
      <MainContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isButtonClicked ? (
              <TextField>{EditTest}</TextField>
            ) : (
              <InputField
                value={EditTest}
                type="test"
                onChange={this.onChangeSearchInput}
              />
            )}
            <Button type="button" onClick={this.onButtonClick}>
              {EditOrSaveButton}
            </Button>
          </InputContainer>
        </CardContainer>
      </MainContainer>
    )
  }
}
export default EditableComponent
