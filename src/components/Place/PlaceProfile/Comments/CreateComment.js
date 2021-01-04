import React, {useEffect, useState} from "react";
import {Form} from 'react-bootstrap'
import StarRatings from 'react-star-ratings';
import Button from "react-bootstrap/Button";

const CreateComment = ({createComment, placeId, comment, editComment, commentForm}) => {

    const [rating, changeRating] = useState(0)
    const [text, changeText] = useState('')
    const [file, changeFile] = useState('')

    useEffect(() => {
        console.log(comment)
        const {bill, rate, text} = comment
        changeFile(bill)
        changeText(text)
        changeRating(rate)
    }, [comment])

    const handleSubmit = () => {

        const formDate = new FormData()
        formDate.append('bill', file)
        formDate.append('rate', rating)
        formDate.append('text', text)
        !comment.id
            ? createComment(placeId, formDate)
            : editComment(comment.id, formDate, placeId)
            changeFile('')
        changeText('')
        changeRating(0)
    }

    const setNewRating = (rating) => changeRating(rating)
    const handleChange = (event) => {
        changeText(event.target.value)
    }

    const handleImageSelect = (event) => {
        changeFile(event.currentTarget.files[0])
    }
    return (
        <Form className='my-2 d-flex flex-column' ref={commentForm}>
            <Form.Group>
                <Form.Label>Ваш общий рейтинг заведения</Form.Label>
                <StarRatings
                    rating={rating}
                    starRatedColor="RGB(23, 162, 183)"
                    starHoverColor='RGB(23, 162, 183)'
                    changeRating={setNewRating}
                    numberOfStars={5}
                    name='rating'
                    starDimension='30px'
                    starSpacing='2px'
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Text</Form.Label>
                <Form.Control value={text}
                              name={'text'}
                              onChange={handleChange}
                              as="textarea"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Bill</Form.Label>
                <Form.File custom>
                    <Form.File.Input isValid={!!file} onChange={handleImageSelect}/>
                    <Form.File.Label data-browse="Search">
                        Custom file input
                    </Form.File.Label>
                    {!!file &&
                    <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>}
                </Form.File>
            </Form.Group>

            <Button className='align-self-center' onClick={handleSubmit}>Отправить комментарий</Button>
        </Form>
    )
}

export default CreateComment
