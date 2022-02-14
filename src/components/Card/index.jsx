import PropTypes from 'prop-types'
 
function Card({ label, title, picture }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <span>{label}</span>
            <img src={picture} alt="freelance" height={80} width={80} />
            <span>{title}</span>
        </div>
    )
}
 
Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,//on peu notifier à cet endroit que le proptype est requis
    picture: PropTypes.string.isRequired,
}

Card.defaultProps = { //sert a parametrer un prop par defaut au cas où il n'est pas envoyé 
    title: 'Mon titre par défaut',
    label: 'Mon label par défaut',
    picture: 'une picture par defaut'
} //exemple j'ai mis dans Freelances le titre du premier en comm et l'affichage se met en default
 
export default Card