import { Link } from 'react-router-dom';
import './classes.css';

const Classes = () => {
  return (
    <>
      <div className="classes-main-container">
        <div className="bg-image">
          <header className="bg-text"></header>
        </div>
      </div>

      <div id="class_details">
        <h2>CHILDREN'S ART CLASSES</h2>
        <h2>STARTING SOON - TERM 2</h2>

        <div className="class_topNote">
          <p>
            I will be teaching Children's Art Classes ages 8-14yrs from my
            Art-Studio. It will be held in Woodbine (near Leumeah) Sydney
            South-West.
          </p>
          <p>
            The classes are great for beginners interested in learning to
            draw/and or paint well as well as to help them improve their
            creative skills in a supportive and comfortable environtment.
          </p>
          <p>
            They will learn to paint from life, still life, photos or their
            imagination using pencils, pastels watercolours or acrylic
            paintings.
          </p>
          <p>
            On their first week materials will be supplied, after that in week
            2, they need can bring in their own materials.
          </p>
        </div>
        <div className="class_bottomNote">
          <br />
          <h4>Materials needed</h4>
          <p>
            A4 sketch book
            <br />
            Pencils (HB, 2B)
            <br />
            Sharpener
            <br />
            Rubber
            <br />
            Ruler
          </p>
          <p>
            A deposit will be required to secure booking and full payment to be
            paid before commencing.
          </p>
          <p>
            In case classes is cancelled the deposit will be transferred to
            other sessions.
          </p>
          <br />
          <h4>Guidelines</h4>
          <p>. Children need to be 8-14yrs old.</p>
          <p>
            . Parents/guardians are not to be present in the room during class.
          </p>
          <p>
            . If up to 2 classes are missed per term, the money is deducted from
            the next term.
          </p>
          <br />
          <p>
            Price Schedule: AUD $220.00
            <br />
            for 1 term (8 sessions)
          </p>
          <p>
            Secure your spot{' '}
            <em>
              <Link to="/contact" className="enquire_now">
                TODAY
              </Link>{' '}
            </em>{' '}
          </p>
          <p>* Limited spaces available *</p>{' '}
        </div>
      </div>
    </>
  );
};

export default Classes;
