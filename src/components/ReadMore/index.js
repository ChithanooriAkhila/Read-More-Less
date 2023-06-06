import {useState} from 'react'

import {
  MainContainer,
  Heading,
  FeatureText,
  ReactImage,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [readMore, setReadMore] = useState(false)

  const getDescription = () =>
    readMore ? reactHooksDescription : reactHooksDescription.slice(0, 170)

  const toggleButton = () => {
    setReadMore(prev => !prev)
  }

  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <FeatureText>Hooks are a new addition to React</FeatureText>
      <ReactImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{getDescription()}</Description>
      <Button type="button" onClick={toggleButton}>
        {readMore ? 'Read Less' : 'Read More'}
      </Button>
    </MainContainer>
  )
}

export default ReadMore
