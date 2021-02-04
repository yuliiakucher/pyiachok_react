import React, {useEffect, useRef} from "react";
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {connect} from "react-redux";
import MessageLeft from "./MessageLeft";
import MessageRight from "./MessageRight";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {deleteMessage, editMessage, sendMessage, showMessageForEdit} from "../../../redux/chat-reducer";


const Chat = ({eventId, messages, userId, sendMessage, messageForEdit, showMessageForEdit, editMessage, deleteMessage}) => {

    const message = useRef('')

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        message.current.value = messageForEdit.text
        scrollToBottom()
    }, [messageForEdit, messages])

    const handleClick = () => {
        console.log(messageForEdit)
        !messageForEdit.id
            ? sendMessage(eventId, {'text': message.current.value})
            : editMessage(messageForEdit.id, {'text': message.current.value}, eventId)
        message.current.value = ''
    }

    return (
        <Card className='d-flex' style={{maxHeight: '400px'}}>
            <div style={{overflow: 'auto'}}>
                {messages.length === 0
                    ? <div className='m-2'>
                        No messages yet...
                    </div>
                    : messages.map(message => {
                            if (message.users.id === userId) {
                                return <MessageRight
                                    key={message.id}
                                    {...message}
                                    eventId={eventId}
                                    showMessageForEdit={showMessageForEdit}
                                    deleteMessage={deleteMessage}/>
                            } else return <MessageLeft key={message.id} {...message}/>
                        }
                    )}
                <div ref={messagesEndRef} />
            </div>

            <Form className='align-self-center'>
                <Container>
                    <Row>
                        <Form.Group className='m-2'>
                            <Form.Control ref={message}/>
                        </Form.Group>
                        <Button
                            className='ml-2'
                            variant='secondary'
                            onClick={handleClick}>
                            <FontAwesomeIcon icon={faPaperPlane}/>
                        </Button>
                    </Row>
                </Container>
            </Form>

        </Card>

    )
}

const mapStateToProps = (state) => {
    return {
        messages: state.ChatPage.messages,
        messageForEdit: state.ChatPage.message,
        userId: state.LoginPage.id,

    }
}

export default connect(mapStateToProps, {sendMessage, showMessageForEdit, editMessage, deleteMessage})(Chat)
