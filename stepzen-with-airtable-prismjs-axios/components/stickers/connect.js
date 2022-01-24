import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

class Connect extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className={this.props.styles}>
        <h1>{this.props.headline}</h1>
        <ReactMarkdown source={this.props.description} />
        <div className="stickers">
          <Image
            src="/images/ninjas.svg"
            alt="group of stickers"
            width="800px"
            height="400px"
          />
        </div>
      </div>
    )
  }
}

export default Connect
