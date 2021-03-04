import React from "react";

//create header

export function Cards(card) {
	return (
		<div className="col">
			<div className="card" style="width: 18rem;">
				<img className="card-img-top" src={image} alt={alt} />
				<div className="card-body">
					<h5 className="card-title">{tittle}</h5>
					<p className="card-text">{description}</p>
					<a href={url} className="btn btn-primary">
						{button}
					</a>
				</div>
			</div>
		</div>
	);
}
