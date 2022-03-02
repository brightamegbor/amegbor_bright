import { Card } from 'react-bootstrap';
import ManFace from '../assets/images/man_face.jpg';
import Avatar from '@mui/material/Avatar';
import { yellow } from '@mui/material/colors';
import { BsCheck } from 'react-icons/bs';
import {
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaInstagram,
    FaTiktok
} from 'react-icons/fa';

function CardView() {
    return (
        <div className="container">
            <p className="pt-2"></p>
            <Card className="mx-auto position-relative">
                <div className="blurContainer">
                    <Card.Img
                        height={220}
                        variant="top"
                        src={ManFace}
                        className="cardImage"
                    />
                </div>
                <div className="user-avatar">
                    <Avatar
                        alt="User Avatar"
                        src={ManFace}
                        sx={{ width: 150, height: 150 }}
                        className="border border-white border-3"
                    />
                    <div className="d-flex justify-content-center">
                        <Avatar sx={{ bgcolor: yellow[700] }} className="check">
                            <BsCheck size={25} />
                        </Avatar>
                    </div>
                </div>

                <Card.Body>
                    <p className="fw-bolder pt-3">Mike Parker</p>

                    <p className="text-center">
                        Some quick example text to buid on the card title and
                        make up the bulk of the card's content
                    </p>

                    <div className="d-flex flex-row justify-content-center">
                        <div className="me-2">
                            <FaFacebookF
                                color={yellow[800]}
                                size={25}
                                className="p-1 rounded-circle border border-warning"
                            />
                        </div>
                        <div className="me-2">
                            <FaTwitter
                                color={yellow[800]}
                                size={25}
                                className="p-1 rounded-circle border border-warning"
                            />
                        </div>
                        <div className="me-2">
                            <FaGooglePlusG
                                color={yellow[800]}
                                size={25}
                                className="p-1 rounded-circle border border-warning"
                            />
                        </div>
                        <div className="me-2">
                            <FaInstagram
                                color={yellow[800]}
                                size={25}
                                className="p-1 rounded-circle border border-warning"
                            />
                        </div>
                        <div className="me-2">
                            <FaTiktok
                                color={yellow[800]}
                                size={25}
                                className="p-1 rounded-circle border border-warning"
                            />
                        </div>
                    </div>
                </Card.Body>
            </Card>

            <p className="pt-2"></p>
        </div>
    );
}

export default CardView;
