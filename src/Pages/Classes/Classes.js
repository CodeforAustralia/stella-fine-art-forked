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
        <h2>ART CLASSES STARTING TERM 2</h2>

        <div className="class_topNote">
          <p>
            I will be holding children's art classes aged 8-14yrs from my
            art-studio located in Woodbine (near Campbelltown) Sydney
            south-west.
          </p>
          <p>
            I will work with them to develop their skills and increase their
            confidence. They will learn to draw from life, still life, photos or
            from their imagination.
          </p>
          <p>
            Once they've developed their skills in drawing, next we will move to
            using colour. Either, pencil, pastels or acrylic painting.
          </p>
          <p>
            On the first session date, materials will be supplied, after that in
            week 2, they need to bring in their own materials.
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
            REGISTER ON THIS {''}
            <em>
              <Link to="/contact" className="enquire_now">
                LINK
              </Link>{' '}
            </em>{' '}
            NOW.
          </p>
          <p>* Limited spaces available. *</p>{' '}
        </div>
      </div>
    </>
  );
};

export default Classes;
