import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import trainer1 from '../assets/trainer1.webp'
import trainer2 from '../assets/trainer2.webp'
import trainer3 from '../assets/trainer3.webp'
import trainer4 from '../assets/trainer4.webp'
function Cards() {
    const trainers = [
        {
          id: 1,
          name: 'Vinyasa',
          image: trainer1,
          description: 'Start the Day',
        },
        {
          id: 2,
          name: 'Hatha,Yoga',
          image: trainer2,
          description: 'Clear, Happy, Calm',
        },
        {
          id: 3,
          name: 'Mays',
          image: trainer3,
          description: 'Move with Tenderness',
        },
        {
          id: 4,
          name: 'Saidman',
          image: trainer4,
          description: 'Facial Tension Release',
        },
      ];
      return (
        <div className="d-flex flex-wrap justify-content-center container-xxl">
          {trainers.map((trainer) => (
            <Card key={trainer.id} style={{ width: '16rem', margin: '1rem' }}>
              <Card.Img variant="top" src={trainer.image} alt={trainer.name} />
              <Card.Body>
                <Card.Title>{trainer.name}</Card.Title>
                <Card.Text>{trainer.description}</Card.Text>
                
              </Card.Body>
            </Card>
          ))}
        </div>
      );
    }

export default Cards;