import React from 'react';
import './SinglePost.css';
import img_src_value from '../img/pexels-pixabay-414860.jpg';

export default function SinglePost() {
  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        <img
          className="single-post-img"
          src={img_src_value}
          alt=""
        />
        <h1 className="single-post-title">
          Similique ratione quia nam aspernatur
          <div className="single-post-edit">
            <i className="single-post-icon far fa-edit"></i>
            <i className="single-post-icon far fa-trash-alt"></i>
          </div>
        </h1>
      </div>
      <div className="single-post-info">
        <span className="single-post-author">Author: <b>KevinP</b></span>
        <span className="single-post-date">1 hour ago</span>
      </div>
      <p className="single-post-desc">
        Pariatur, architecto libero incidunt, sunt cupiditate ea eum temporibus maiores voluptatum adipisci autem?
        Impedit eos similique reprehenderit nam, rerum repellendus eligendi sapiente. Ipsa nam molestias explicabo
        possimus. Blanditiis suscipit, sed nostrum nulla corrupti iste reprehenderit autem. Aspernatur labore
        quidem ducimus delectus aperiam nihil aliquam, in sint atque eaque fugit facere ut voluptatem, fugiat,
        iure deserunt mollitia laborum repudiandae. Delectus nulla, unde vel ab in accusantium obcaecati placeat
        beatae, veritatis suscipit, ut alias culpa. Pariatur consequatur voluptatibus repellat magnam, aut
        voluptatum ipsum amet laborum incidunt totam eos id repellendus enim possimus sed suscipit quisquam!

        Illum consectetur fugit eius eaque dolorem, quaerat nam ex alias id, aspernatur ullam consequuntur impedit
        numquam facere sapiente doloremque assumenda qui iste quasi laborum et dolor molestias repellat!
        Exercitationem vel sint temporibus quisquam accusamus. Tenetur maiores voluptas doloremque assumenda libero,
        consequuntur nisi illo dolorum quae officia! Incidunt, dolore.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam laboriosam! Eum, explicabo eos error
        quod debitis laborum molestias deserunt reiciendis. Ipsa eaque ea natus nobis magnam blanditiis fugit,
        distinctio sit facilis debitis quas recusandae harum, praesentium quos deleniti officiis hic id! Unde
        numquam dolor vitae beatae saepe fuga labore, assumenda et nihil natus rem quae consequuntur facilis?
      </p>
    </div>
  );
}
