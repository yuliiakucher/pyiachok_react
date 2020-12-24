import React, {useEffect, useRef, useState} from "react";
import {ListGroup, Form, Button} from "react-bootstrap";
import Select from 'react-select'

const Filters = ({getTagsInfo, spec, tags, type, getAllPlaces}) => {
    useEffect(getTagsInfo, [])

    const [selected_type, handleType] = useState('')
    const [selected_tag, handleTag] = useState('')
    const [selected_spec, handleSpec] = useState('')
    const [sorting, handleSorting] = useState('')


    const handleClick = () => {
        const url_params = new URLSearchParams()
        selected_type && url_params.append('type', selected_type.id)
        selected_spec && selected_spec.map(spec => url_params.append('spec', spec.id))
        selected_tag && selected_tag.map(tag => url_params.append('tag', tag.id))
        console.log(sorting)
        sorting && url_params.append('sort_abc', sorting.value)
        console.log(url_params)
        getAllPlaces(url_params.toString())
    }

    const type_options = [...type.map(t => ({id: t.id, value: t.type_name, label: t.type_name}))]
    const tag_options = [...tags.map(tag => ({id: tag.id, value: tag.tag_name, label: tag.tag_name}))]
    const spec_options = [...spec.map(spec => ({
        id: spec.id,
        value: spec.specificity_name,
        label: spec.specificity_name
    }))]
    const sort_options = [
        {value: 'True', label: 'From top'},
        {value: 'False', label: 'From bottom'}]

    return (
        <ListGroup>
            <Form className={'d-flex flex-column justify-content-center'}>
                <ListGroup.Item>
                    <h6>Restaurant Type</h6>
                    <Select
                        name="type"
                        value={selected_type}
                        onChange={(e) => handleType(e)}
                        options={type_options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        isClearable
                    />
                </ListGroup.Item>
                <ListGroup.Item>
                    <h6>Restaurant Tags</h6>
                    <Select
                        isMulti
                        name="tags"
                        value={selected_tag}
                        onChange={(e) => handleTag(e)}
                        options={tag_options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </ListGroup.Item>
                <ListGroup.Item>
                    <h6>Restaurant Specifities</h6>
                    <Select
                        isMulti
                        name="specifities"
                        value={selected_spec}
                        onChange={(e) => handleSpec(e)}
                        options={spec_options}
                        // className="basic-multi-select"
                        // classNamePrefix="select"
                    />
                </ListGroup.Item>
                <ListGroup.Item>
                    <p>Sort by alphabet</p>
                    <Select
                        name="sorting"
                        value={sorting}
                        onChange={(e) => handleSorting(e)}
                        options={sort_options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        isClearable
                    />
                </ListGroup.Item>
                <Button onClick={handleClick} className={'my-2'}>Filter!</Button>
            </Form>
        </ListGroup>

    )
}

export default Filters
