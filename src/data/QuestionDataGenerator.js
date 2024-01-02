// QuestionDataGenerator.js

const generateRandomizedQuestions = () => {
    const questions = [
        {
            questionId: 1,
            question: 'What is the recommended course of action if there is an inaccuracy in the documents during the vehicle check at the dock?',
            options: ['Proceed with unloading and report later.', 'Inform the security guard immediately.', 'Contact the source team for a solution.', 'File the documents without notifying anyone.'],
            answer : 'Contact the source team for a solution.',
          },
          {
            questionId: 2,
            question: 'What step should be taken if the vehicle seal and signature match during the document check?',
            options: ['Start unloading the vehicle.', 'Inform the Meesho SC POC.', 'File the documents without further action.', 'Contact the source team for verification.'],
            answer : 'Start unloading the vehicle.',
          },
          {
            questionId: 3,
            question: 'When is it appropriate to begin unloading the vehicle according to the provided statements?',
            options: ['Before checking the documents.', 'After informing the Meesho SC POC.', 'Once the documents are confirmed correct.', 'Regardless of the document status.'],
            answer : 'Once the documents are confirmed correct.',
          },
          {
            questionId: 4,
            question: 'What action should be taken if the counting sheets and complete documents given by drivers are found inaccurate?',
            options: ['File them separately based on their date.', 'Begin unloading and report later.', 'Notify the security guard immediately.', 'Inform the Meesho SC POC and contact the source team for a solution.'],
            answer : 'Inform the Meesho SC POC and contact the source team for a solution.',
          },
          {
            questionId: 5,
            question: 'Where can an employee find the option to mark the arrival of a trip on the Fareye main screen?',
            options: ['Trip dispatch & Arrive section.', 'Success column.', 'Finish scan.', 'Challan ID section.'],
            answer : 'Trip dispatch & Arrive section.',
          },
          {
            questionId: 6,
            question: 'What is the next step after entering the challan ID in the trip arrival?',
            options: ['Select the finished Trip ID.', 'Receive bags with specific Trip ID.', 'Finish scan.', 'Mark trip arrival as finished.'],
            answer : 'Mark trip arrival as finished.',
          },
          {
            questionId: 7,
            question: 'What action should be taken after finishing the trip arrival, and bags with a specific Trip ID need to be received?',
            options: ['Enter Finish scan', 'Select the finished Trip ID.', 'Verify personal FE ID login.', 'Check bags with Trip ID.'],
            answer : 'Select the finished Trip ID.',
          },
          {
            questionId: 8,
            question: 'What is the primary requirement for an employee before the arrival of a trip?',
            options: ['Use any available FE ID.', 'Verify the Fareye main screen.', 'Check bags with Trip ID.', 'Confirm personal FE ID login.'],
            answer : 'Confirm personal FE ID login.',
          },
          {
            questionId: 9,
            question: 'What is the correct sequence of actions after receiving bags during the inbound process?',
            options: ['Log in Individual FE ID, scan shipments, and inform supervisors if needed.', 'Move bags to the primary sorting area, scan shipments, and finish scan.', 'Select inbound, scan shipments, and sort into primary bins.', 'Search bag ID, scan shipments, and drop errors to IRT trolleys.'],
            answer : 'Move bags to the primary sorting area, scan shipments, and finish scan.',
          },
          {
            questionId: 10,
            question: 'Where should an employee log in to start the primary scan during the inbound process?',
            options: ['Home page of Fareye.', 'In the primary sorting area.', 'In the inbound option.', 'In the search bar.'],
            answer : 'Home page of Fareye.',
          },
          {
            questionId: 11,
            question: 'What action should be taken if there is an overage or shortage of shipments during the primary scanning?',
            options: ['Drop errors to IRT trolleys.', 'Inform supervisors immediately.', 'Complete the finish scan and swipe.', 'Move bags to the primary sorting area.'],
            answer : 'Inform supervisors immediately.',
          },
          {
            questionId: 12,
            question: 'What is the appropriate step if there is any problem with the shipment barcode or label while scanning during the inbound process?',
            options: ['Drop errors to IRT trolleys.', 'Finish scan and swipe.', 'Sort shipments into primary bins.', 'Inform supervisors immediately.'],
            answer : 'Inform supervisors immediately.',
          },
          {
            questionId: 13,
            question: 'What is the first step in the process of bagging shipments during the inbound process?',
            options: ['Select the Create bag option in the Inbound column.', 'Confirm DC code and order matching.', 'Log in Individual FE ID for the primary scan.', 'Drop orders with invalid scan errors in IRT bins.'],
            answer : 'Log in Individual FE ID for the primary scan.',
          },
          {
            questionId: 14,
            question: 'What should be selected first in the Create bag option before scanning orders for bagging?',
            options: ['Drop orders with invalid scan errors.', 'Select the Create bag option.', 'Confirm DC code and order matching.', 'Choose the destination.'],
            answer : 'Choose the destination.',
          },
          {
            questionId: 15,
            question: 'What action should be taken if the total scanned shipment count does not tally with bag and device count during bagging?',
            options: ['Drop orders in IRT bins.', 'Take out unscanned orders from the bag.', 'Close the bag without verification.', 'Complete the finish scan.'],
            answer : 'Take out unscanned orders from the bag.',
          },
          {
            questionId: 16,
            question: 'When is the Bag ID entered in the Reference number option during the bagging process?',
            options: ['Before confirming DC code and order matching.', 'After closing the bag.', 'After dropping the bag in the staging area.', 'Before selecting the Create bag option.'],
            answer : 'After closing the bag.',
          },
          {
            questionId: 17,
            question: 'What is the initial step to connect closed bags in the Meesho system?',
            options: ['Fill in Next location & Bag Destination.', 'Scan bags into the connection.', 'Select Save bag option.', 'Choose Create connection on the home page.'],
            answer : 'Choose Create connection on the home page.',
          },
          {
            questionId: 18,
            question: 'What information should be filled in the Create connection option after scanning all bags for connection?',
            options: ['Select Save bag option and close the connection.', 'Next location & Bag Destination.', 'Choose Create connection on the home page.', 'Fill in the Bag ID.'],
            answer : 'Next location & Bag Destination.',
          },
          {
            questionId: 19,
            question: 'What is the final step after scanning all bags into the connection in the Meesho system?',
            options: ['Choose Create connection on the home page.', 'Fill in Next location & Bag Destination.', 'Select Save bag option and close the connection.', 'Scan bags into the connection.'],
            answer : 'Select Save bag option and close the connection.',
          },
          {
            questionId: 20,
            question: 'What is the first step to initiate the trip creation process in the Midmile section?',
            options: ['Copy the Required Connection ID.', 'Select the Route / Lane & Destination.', 'Go to Create Trip option.', 'Download the Excel Sheet.'],
            answer : 'Go to Create Trip option.',
          },
          {
            questionId: 21,
            question: 'What information needs to be added after selecting the Route / Lane & Destination in the trip creation process?',
            options: ['Copy the Required Connection ID.', 'Go to the Connection Details.', 'Download the Manifest.', 'Close the Trip Creation.'],
            answer : 'Go to the Connection Details.',
          },
          {
            questionId: 22,
            question: 'What is the next step after adding the Connection ID of the specific DC in the trip creation process?',
            options: ['Close the Trip Creation.', 'Copy the Active Shipments Search Bar.', 'Download the Excel Sheet.', 'Paste the Connection ID in Trip Details.'],
            answer : 'Close the Trip Creation.',
          },
          {
            questionId: 23,
            question: 'How can you download the Excel Sheet of the trip in the Order Management section?',
            options: ['Go to More Option in Midmile Section.', 'Copy the Required Connection ID.', 'Select the Route / Lane & Destination.', 'Paste the Connection ID in Trip Details.'],
            answer : 'Go to More Option in Midmile Section.',
          },
          {
            questionId: 24,
            question: 'What is the maximum acceptable time frame for providing acknowledgment to emails regarding vehicle unloading?',
            options: ['2 hours', '4 hours', '6 hours', '8 hours'],
            answer : '4 hours',
          },
          {
            questionId: 25,
            question: 'What is the minimum payment requirement per hour for every employee?',
            options: ['200 IPP', '300 IPP', '400 IPP', '500 IPP'],
            answer : '400 IPP',
          },
          {
            questionId: 26,
            question: 'What is the mandatory SPB (Standard Packing Box) value to be observed during the bagging process?',
            options: ['25', '100', '75', '50'],
            answer : '50',
          },
          {
            questionId: 27,
            question: 'When should bag connections and trip connections start according to the provided statements?',
            options: ['Before the vehicle reaches the dock', 'During primary scanning', 'After vehicle unloading', 'Once dispatch details are checked'],
            answer : 'After vehicle unloading',
          },
          {
            questionId: 28,
            question: 'What records should be filed based on their date, according to the provided statements?',
            options: ['Bags counting sheets', 'Trip connections', 'Bag connections', 'Dispatch details'],
            answer : 'Bags counting sheets',
          },
          {
            questionId: 29,
            question: 'When should the SC process be completed after the vehicle has been reported?',
            options: ['Within 3 hours', 'Within 4 hours', 'Within 1 hour', 'Within 2 hours'],
            answer : 'Within 2 hours',
          },
          {
            questionId: 30,
            question: 'What action is mandatory if any damage or shortage is found during the primary scanning process?',
            options: ['Ignore and continue the process', 'Report to the security guard', 'Acknowledge the respected team mail', 'File a complaint with the SC manager'],
            answer : 'Acknowledge the respected team mail',
          },
          
    ];
  
    // Shuffle the array
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  
    // Slice to get a random subset (e.g., first 10 questions)
    const selectedQuestions = shuffledQuestions.slice(0, 10);  
    return selectedQuestions;
  };
  
  export default generateRandomizedQuestions;
  