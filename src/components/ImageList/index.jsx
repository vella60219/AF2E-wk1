import { Row, Col } from "antd";
import ImageItem from "../ImageItem";

import styles from "./imageList.module.css"

function ImageList({ images, isLoading }) {
    return (
        <Row gutter={[24, 24]} className={styles.box} >
            {images.map(image => (
                <Col
                    key={image.id}
                    sm={{ span: 12 }}
                    lg={{ span: 6 }}
                >
                    <ImageItem
                        key={image.id}
                        image={image}
                    />
                </Col>
            ))}
        </Row>
    );
}

export default ImageList;