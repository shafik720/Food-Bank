
// this component will generate animated emoticon according to the user's rating selection to give the user a better ui

const RatingImpression = ({ selectedRating }) => {

    if (selectedRating == 5) {
        // setRatingImpression('Best In Town');
        return (
            <div className="flex items-center gap-2">
                <p>Best In Town</p>
                <picture>
                    <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f929/512.webp" type="image/webp" />
                    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f929/512.gif" alt="🤩" width="32" height="32" />
                </picture>

            </div>
        )
    }
    if (selectedRating == 4) {
        return (
            <div className="flex items-center gap-2">
                <p>Loved it</p>
                <picture>
                    <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f970/512.webp" type="image/webp" />
                    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f970/512.gif" alt="🥰" width="32" height="32" />
                </picture>
            </div>
        )
    }

    if (selectedRating == 3) {
        // setRatingImpression('Best In Town');
        return (
            <div className="flex items-center gap-2">
                <p>It's Okay</p>
                <picture>
                    <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/512.webp" type="image/webp" />
                    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f642/512.gif" alt="🙂" width="32" height="32" />
                </picture>

            </div>
        )
    }

    if (selectedRating == 2) {
        return (
            <div className="flex items-center gap-2">
                <p>Hated it</p>
                <picture>
                    <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f611/512.webp" type="image/webp" />
                    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f611/512.gif" alt="😑" width="32" height="32" />
                </picture>
            </div>
        )
    }

    if (selectedRating == 1) {
        return (
            <div className="flex items-center gap-2">
                <p>Hell In Mouth</p>
                <picture>
                    <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f92e/512.webp" type="image/webp" />
                    <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f92e/512.gif" alt="🤮" width="32" height="32" />
                </picture>
            </div>
        )
    }



};

export default RatingImpression;

/* 
<picture>
  <source srcset="https://fonts.gstatic.com/s/e/notoemoji/latest/1f611/512.webp" type="image/webp">
  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f611/512.gif" alt="😑" width="32" height="32">
</picture>

*/