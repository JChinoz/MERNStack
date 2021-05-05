import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./PlaceForm.css";

const DUMMY_PLACE = [
    {
        id: "p1",
        title: "Empire State Building",
        description: "One of the most famous sky scrappers in the world",
        imageUrl:
            "http://static1.squarespace.com/static/58fbfecf725e25a3d1966494/5902947920099eda52c5ac82/5a01f46bd63352b3be374974/1554667940303/?format=1500w",
        address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
        location: {
            lat: 48.8583701,
            lng: 2.2922926,
        },
        creator: "u1",
    },
    {
        id: "p2",
        title: "Empire State Building",
        description: "One of the most famous sky scrappers in the world",
        imageUrl:
            "http://static1.squarespace.com/static/58fbfecf725e25a3d1966494/5902947920099eda52c5ac82/5a01f46bd63352b3be374974/1554667940303/?format=1500w",
        address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
        location: {
            lat: 48.8583701,
            lng: 2.2922926,
        },
        creator: "u2",
    },
];

const UpdatePlace = () => {
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACE.find((p) => p.id === placeId);
    if (!identifiedPlace) {
        return (
            <div className="center">
                <h2>Could not find place!</h2>
            </div>
        );
    }
    return (
        <form className="place-form">
            <Input
                id="title"
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={() => {}}
                value={identifiedPlace.title}
                valid={true}
            />
            <Input
                id="description"
                element="textarea"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (min 5 characters)."
                onInput={() => {}}
                value={identifiedPlace.description}
                valid={true}
            />
            <Button type="submit" disabled={true}>
                UPDATE PLACE
            </Button>
        </form>
    );
};

export default UpdatePlace;