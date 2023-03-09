import { Row, Col } from "antd";

import ImageList from "../ImageList";
import BlackTitle from "../BlockTitle";

import styles from "./images.module.css"

function Images({ images }) {
    return (
        <article className={styles.layout} >
            <Row className="container">
                <Col span={24} className={styles.box} >
                    <BlackTitle text="IMAGES" />
                    <ImageList
                        images={images}
                    />
                </Col>
            </Row>
        </article>
    );
}

export default Images;