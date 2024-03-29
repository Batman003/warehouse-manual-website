const topic = ["Vehicle Dock Procedure", "Trip Arrivel", "Primary Scan", "Bagging", "Connection", "Trip Dispatch", "Other Operational"];

const vehicleDocProcedureData = ["Once the vehicle reaches the dock, the documents should be checked properly.", 
"After checking all the documents if everything is correct then the security guard should check the vehicle seal and sighn match.", 
"In case of any inaccuracy in the documents, immediately available Meesho SC POC should be informed. Further they contact the source team and get the solution.", 
"If the available documents are correct, unloading of the vehicle should begin.", 
"Counting sheets and complete documents given by drivers should be filed separately on the basis of their date."];

const tripArrivel = ['Employee should use his personal FE ID only. FE ID login should be checked before trip arrival.', 
'On Fareye main screen, select Trip arrive in Trip dispatch & Arrive section', 
'After entering the challan ID in the trip arrival, the trip arrival should be finished.', 
'After the trip arrivel finish, you have to select the finished Trip ID in the success column.', 
'Then the bags with specific Trip ID should be received.',
"Finish scan should be entered after receiving the bags completely."];

const primaryScan = ['Bags should be moved to the primary sorting area after receiving.', 
'Should be Log In Individual FE Id to Star The primary scan.', 
'In the home page of Fareye, select the inbound option.', 
'Select the pending column in the inbound and search for the bag ID in the search bar.', 
'After the bag id search, select the inbound and scan the shipments.',
'While scanning the shipment, only Fareye tracking number should be scanned.',
'After scanning the shipment, the DC code of the order will pop-up on the screen of the HHD, according to which the shipment should be sorted.',
'In the case of primary scanning during the inbound process, if there is overage or shortage of shipments,the supervisors available on the floor should be informed immediately.',
'Scanned shipments should be sorted into their primary bins according to their destination.',
'If there is any problem with shipment barcode, label or any other issues while scanning the shipment, the supervisors on the floor should be informed immediately.',
'If any kind of error is found while scanning the orders, it should be dropped to the nearby IRT trolleys.',
'Once the scanning of all the shipments in the bag is complete, press the finish scan and then swipe to complete.'];

const Bagging = ['Should be Log In Individual FE Id to Star The primary scan.', 
'To bag the shipments, select the Create bag option in the Inbound column.', 
'Destination should be selected first in Create bag option.', 
'Before scanning the orders for bagging, it should be confirmed whether the selected DC code and the order being scanned are matching.', 
'Then the shipments related to the selected DC should be scanned and only the orders which are scanned successfully, should be dropped in the bag.',
'While doing a bagging scan, orders with invalid scan error should be dropped in IRT bins',
'Total scanned shipment count should be tallied with bag & device count before bags are closed.',
'If the shipment in the bag and the shipments in the device do not tally, immediately find the orders that are not scanned in the bag and take them out.',
'After ensuring that there is no problem, the bag should be closed properly.',
'Before closing the bag, the bagging process should be completed by selecting Finish Scan.',
'Once the bag is closed, the Bag ID should be entered in the Reference number option.',
'After closing the bag, check the details printed on the seal tag.',
'After checking the details the bag label should be pasted on the tag in proper order.',
"After the bag is closed, the bag should be dropped in the satging Area."];

const connection =['Select Create connection option on Meesho home page and select all bags for connection according to their destination of closed bags.',
'Next location & Bag Destination should be filled in Create connection option.',
'After scanning all the bags into the connection, select the Save bag option and close the connection.'];

const tripDispatch = ['In The Midmile Section Goto the Create Trip Option.',
'Then Select The Route / Lane & Destination.',
'Need To Add the Connection id Of The Specific DC.',
'Then Close The Trip Creation.',
'Goto The Connection Details in Midmile Section Copy The Required Connection ID & Then Paste It In Trip Details To Dowload The Manifest.',
'To Download the Excel Sheet Of The Trip Copy The Active Shipments Search Bar In Order Manage Ment Section Then Goto More Option To Download.'
]

const otherOperational = ['Acknowledgment should be given to their mails within 04 hours after the vehicle is unloaded.',
'Every employee must pay a minimum of 400 IPP per hour.',
'It is mandatory to observe SPB of 50 while bagging.',
'Bag connections and trip connections should start only after the vehicle reaches the dock',
'The dispatch details of the vehicle standing at the dock should be checked.',
'Dispatch records and bags counting sheets should be filed on the basis of their date.',
'Once The Vehicle has been reported to the SC Process Should Be Complete Within 02 Hrs With Trip Connection.',
"If Any Damage & Shortage Found While Doing The Primary It's Mandatory To Acknowledge the Respected Team Mail Along With The Reliable Documents Or proofs(CCTV Footage )"
]

export { topic, vehicleDocProcedureData, tripArrivel, primaryScan,Bagging,connection,tripDispatch,otherOperational };