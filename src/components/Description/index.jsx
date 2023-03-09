import { Row, Col } from "antd";

import { WhiteTitle } from "../BlockTitle";

import styles from "./description.module.css"

function Description({ description }) {
    return (
        <article className={styles.layout}>
            <Row className="container" >
                <Col span={24} className={styles.box} >
                    <WhiteTitle text="DESCRIPTIONS" />
                    <p className={styles.content}>{description}</p>
                </Col>
            </Row>
        </article>
    );
}

export default Description;