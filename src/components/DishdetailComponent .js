import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';



// componentDidMount() {
//     console.log('DishDetail Component componentDidMount is invoked');
// }

// componentDidUpdate() {
//     console.log('DishDetail Component componentDidUpdate is invoked');
// }


const RenderDish = ({ dish }) => {
    if (dish != null)
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return (
            <div></div>
        );
}

const RenderComments = ({ dish }) => {
    if (dish != null) {
        const comments = dish.comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <ul>{comment.comment}</ul>
                    <ul>--{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(comment.date.toLocaleDateString)}</ul>
                </div>
            );
        });

        return (
            <div className="container">
                <h1>Comments:</h1>
                {comments}
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}


const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish}/>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments dish={props.dish} />
                </div>
            </div>
        </div>
    );
}


export default DishDetail;