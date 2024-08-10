type CheckoutFormData = {
	personalInfo: {
		firstName: string;
		lastName: string;
		email: string;
		phoneNumber: string;
		address: {
			city: string;
			street: string;
			country: string;
			postalCode: string;
		};
	};
	billingInfo: {
		cardName: string;
		cardNumber: string;
		expiry: Date;
		cvv: string;
		saveAsDefaultMethod: boolean;
	};
};
