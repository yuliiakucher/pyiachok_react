import React, {useEffect, useState} from "react";
import {Form} from 'react-bootstrap'
import StarRatings from 'react-star-ratings';
import Button from "react-bootstrap/Button";
import CustomFileInput from "../../../utilits/CustomFileInput";

const CreateComment = ({createComment, placeId, comment, editComment, commentForm}) => {

    const [rating, changeRating] = useState(0)
    const [text, changeText] = useState('')
    const [file, changeFile] = useState('')

    useEffect(() => {
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
                <CustomFileInput file={file} label='Bill' setData={changeFile} file_label='Please, attach your bill'/>
            </Form.Group>
            <Button className='align-self-center' onClick={handleSubmit}>Отправить комментарий</Button>
        </Form>
    )
}

export default CreateComment
