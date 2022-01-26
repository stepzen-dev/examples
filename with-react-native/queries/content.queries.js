import { gql } from "@apollo/client";

export const GET_IMAGE = gql`
	query GetImagesbyPublicId($publicId: ID!) {
		cloudinaryImage(publicId: $publicId) {
			assetId
			bytes
			format
			publicId
		}
	}
`;

export const GET_IMAGES = gql`
	query GetImages {
		cloudinaryImages {
			assetId
			bytes
			format
			publicId
		}
	}
`;
