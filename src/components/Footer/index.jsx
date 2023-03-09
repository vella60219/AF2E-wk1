import { Row, Col } from "antd";

import styles from "./footer.module.css"

function Footer() {
    return (
        <footer className="footer">
            <div className={styles.above} >
                <div className="container">
                    <Row justify="space-between" align="middle"
                        className={styles.aboveBox}>
                        <Col span={24}
                            lg={{ span: 16 }}
                        >
                            <h5 className={styles.description}>
                                臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
                            </h5>
                        </Col>
                        <Col span={24}
                            lg={{ span: 8 }}
                        >
                            <ul className={styles.list}>
                                <li className={styles.item}><a href="" className={styles.link}><i className="fab fa-facebook-f"></i></a></li>
                                <li className={styles.item}><a href="" className={styles.link}><i className="fab fa-google-plus-g"></i></a></li>
                                <li className={styles.item}><a href="" className={styles.link}><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </Col>

                    </Row>
                </div>
            </div>

            <div className={styles.below}>
                <Row className="container" justify="center">
                    <Col span={24}>
                        <h6 className={styles.copyright}>
                            &copy; Copyright All rights reserved.
                        </h6>
                    </Col>
                </Row>
            </div>
        </footer>
    );
}

export default Footer;