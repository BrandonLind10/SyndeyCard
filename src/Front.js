let React= require("react");


class Front extends React.Component{
    
    render(){
                
            //element specific styles
            let coverStyles={
                transformStyle: "preserve-3d",
                position: "absolute"
            }
            let frontStyles={
                position: "absolute",
                backgroundColor: "red"
            }
            let backStyles={
                position: "aboslute",
                transform: "rotatey(180deg)",
                backfaceVisibility: "hidden",
                backgroundColor: "#ffffe6",
                border: "5px solid red"
            }
            
            let greetingStyles={
                display: "block",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem"
            }
            
        return <div className="Front" style={Object.assign({},this.props.styles,coverStyles)}>
                <div style={Object.assign({},this.props.styles,frontStyles)}>Front</div>
                <div style={Object.assign({},this.props.styles,backStyles)}>
                        <div className="content" style={this.props.contentStyles}>
                            
                        <span className="greeting" style={greetingStyles}>Dear Sydney,</span>
                            
                        Happy Valentine’s Day Sydney. 

                        I think a friend and close friends is a concept that is broad with bunch sub concepts under that friend. What is a friend? What does it mean to value someone? What does it mean to appreciate? I think those are complex things with multiple sub concepts. If a close friend is someone that you deeply appreciate and care about then you are a close friend of mine. 

                        Nothing you particularly do makes me appreciate you as much as who you are that I appreciate. I think everyone as base  self maybe who they are internally, independent of conditioning and genetic programming for lack of better words. People are unique conscious objects that can be appreciated like a painting in a gallery. You don’t particularly interact with a painting much in a conventional sense, the interaction is more abstract, mostly just sheer appreciation.
                        </div>
                    </div>
            </div>
    }
}

module.exports=Front;