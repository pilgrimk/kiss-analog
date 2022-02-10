import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';
import img_src_value from '../img/pexels-ksenia-chernaya-5691583.jpg';

export default function Post() {
    return (
        <div className="post">
            <img className="post-img" src={img_src_value} alt=""></img>
            <div className="post-info">
                <div className="post-cats">
                    <span className="post-cat">Music</span>
                    <span className="post-cat">Life</span>
                </div>
                <Link className='link post-title' to='/post/1'>Similique ratione quia nam</Link>
                <hr />
                <span className="post-date">1 hour ago</span>
            </div>
            <p className="post-desc">
                Dolores ea veritatis dolore esse? Assumenda excepturi animi voluptatem autem voluptatibus nemo velit
                dolorem sapiente repellat doloribus a et, corporis pariatur ab debitis! Quam at vero adipisci, labore
                magnam mollitia, dolor eligendi blanditiis, sint consequatur nesciunt numquam? Ipsam velit excepturi dolor
                minus esse reiciendis maiores tenetur, eius omnis nisi a eligendi repellat nulla? Dolorum minus illo ipsam
                debitis earum sapiente, obcaecati deserunt optio vel tempora quam modi quas ea sunt officia quo repudiandae
                fuga natus at sit ducimus. Ea nemo alias consequatur quam velit totam quas, ex eos sed facere quo nesciunt,
                ipsam amet modi molestias necessitatibus sequi veniam. In quos dolorum tempora deleniti ipsam assumenda
                vero voluptatibus blanditiis voluptates, ipsa dolore quo similique, ipsum illum natus. Ut perspiciatis
                nesciunt eius possimus sed cupiditate, odit inventore, accusantium et ipsam, nostrum atque vitae voluptas
                ab suscipit architecto cumque consectetur omnis? Similique vel officia quisquam sit accusantium.
            </p>
        </div>
    )
}
