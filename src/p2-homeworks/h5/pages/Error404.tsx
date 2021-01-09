import React from 'react';
import style from './Error404.module.css'

function Error404() {
    return (
        <div className={style.error_page}>
            <div className={style.title_404}>404</div>
            <div className={style.title}>UH OH! You're lost. ฅ/ᐠ.̫ .ᐟ\ฅ</div>
            <span>
                The page you are looking for does not exist. <br />
                        How you got here is a mystery! <br />
                        But you can choose the section above and have fun there!
                    </span>
        </div>
    );
}

export default Error404;
