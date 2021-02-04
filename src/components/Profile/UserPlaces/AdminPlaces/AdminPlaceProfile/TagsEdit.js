import React, {useState} from 'react';
import {Button, ListGroupItem} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {PlaceAPI} from "../../../../api/api";
import {getPlaceProfile} from "../../../../../redux/place-reducer";
import {useDispatch} from "react-redux";

const TagsEdit = ({place_id, tag}) => {
    const dispatch = useDispatch()


    const [delete_button, setButton] = useState(false)

    const handleClick = (tag_id) => {
        tag.tag_name
            ? PlaceAPI.deleteTagSpecFromPlace('tag', place_id, tag_id)
            : PlaceAPI.deleteTagSpecFromPlace('specificity', place_id, tag_id)
        dispatch(getPlaceProfile(place_id))
    }

    return (

        <ListGroupItem
            key={tag.id}
            onMouseEnter={() => setButton(true)}
            onMouseLeave={() => setButton(false)}
        >
            {tag.tag_name || tag.specificity_name}
            {delete_button &&
            <Button
                name={tag.tag_name || tag.specificity_name}
                onClick={() => handleClick(tag.id)}
                className='ml-4 py-0'
                size="sm"
                variant='danger'>
                <FontAwesomeIcon icon={faTimes}/>
            </Button>}
        </ListGroupItem>
    );
};

export default TagsEdit;
