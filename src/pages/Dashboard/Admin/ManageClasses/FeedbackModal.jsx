import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const FeedbackModal = ({ _id, isOpen, handleSendFeedback, closeModal }) => {
	const sendFeedback = (event) => {
		event.preventDefault();

		const feedback = event.target.feedback.value;
		handleSendFeedback(_id, feedback);
	};
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center rounded-sm">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-gray-200 p-6 text-left align-middle shadow-xl transition-all  rounded-sm">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900 text-left mb-4"
									>
										Feedback
									</Dialog.Title>
									<div className="mt-2">
										<form onSubmit={sendFeedback}>
											<textarea
												name="feedback"
												type="textarea"
												placeholder="Write your feedback here..."
												className="textarea w-full rounded-sm focus:border-0 bg-transparent font-normal text-base"
											/>
											<div className="mt-4 flex justify-end">
												<input
													type="submit"
													value="Send Feedback"
													className="btn btn-primary"
												/>
											</div>
										</form>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};
export default FeedbackModal;
