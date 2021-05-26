import React, { Fragment, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import To_cpu from "./cards/To_cpu"


const Cpu = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/api/todo/cpu")
        .then((res) => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result)
            },
            (error) => {
                console.log(error)
            }
        )
    }, []);

    return !isLoaded && items === null ? (
        <Fragment>
            <Container>
                <h1>Загрузка</h1>
            </Container>
        </Fragment>
    ) : (
        <Fragment className="mb-2">
            <h1 className="text-center my-4"> Процессоры</h1>
            <Row className="ml-2">
            
                {items.map((el) => (
                    <To_cpu key={el.id} todo={el} />
                ))}
            </Row>
        </Fragment>
    );
};

export default Cpu;