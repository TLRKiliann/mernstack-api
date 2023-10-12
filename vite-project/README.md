README.md

# Schema :

## ComputerRoom (components) => 

- ConfirmationOrigin (action)
- DisplayInviteOrigin (action)

- AskMessageBoxOrigin (action) => AskMessageBox.tsx (components/terminalchat/...)

- HandleAskUserOrigin (action) => UsersOnline (components/terminalchat/...)
- TerminalComponent (components/terminalchat/...)

---

## Suite

- AskMessageBoxOrigin

---

									Stmts	  Branch	  Func	   Lines	uncovered
 PrivateMessage.tsx            |    6.62 |      100 |       0 |    6.62 | 	9-149
 PrivateMessage.tsx            |   75.32 |       50 |      25 |   75.32 | 47-51, 54-78, 104-106, 124-128    
 PrivateMessage.tsx            |   75.32 |       50 |      25 |   75.32 | 47-51,54-78,104-106,124-128 

 - tester un générateur d'id ? ok
 une function qui contient un service pour routage mysql ? sans être en fonction...
 - style={{}} ? ok
 div qui contient un useRef (ref) ? impossible à résoudre

 ---

 File                            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                    
--------------------------------|---------|----------|---------|---------|------------------------------------------------------
All files                       |   59.44 |    67.04 |   31.81 |   59.44 |                                     
--------------------------------------------------------------------------
 src                            |      90 |      100 |      50 |      90 |
 -------------------------------------------------------------------------                                  
  PrivateRoute.tsx              |      50 |      100 |       0 |      50 | ???      6-12                                                 
                                                      
 src/actions                    |   32.96 |    71.42 |   35.71 |   32.96 |                                                      
  AskMessageBoxOrigin.tsx       |   41.72 |       50 |      25 |   41.72 | 47-51,54-136                                         
  ChooseMemberToAsk.tsx         |   21.87 |      100 |       0 |   21.87 | 13-62                                                
  ConfirmationOrigin.tsx        |   14.28 |      100 |       0 |   14.28 | 22-159                                               
  DisplayInviteOrigin.tsx       |   34.84 |      100 |      20 |   34.84 | 26-107,110-111,114-115                               
  HandleAskUserOrigin.tsx       |     100 |       75 |     100 |     100 | 17                                                   
                                                                                                            
 src/components                 |   73.29 |       75 |      60 |   73.29 |                                                      
  AskMessageBox.tsx             |     100 |       50 |   33.33 |     100 | 32-39                                                
  ChatComputer.tsx              |   37.75 |      100 |   33.33 |   37.75 | 43-46,49-91,94-158,180-189                           
  ComputerRoom.tsx              |   66.66 |       60 |      50 |   66.66 | 26-31,42-43,55-68,73-87,92-93,128-136                
                                                      
  MainComp.tsx                  |   64.17 |      100 |     100 |   64.17 | 36-59                                                                                                      
  NavBar.tsx                    |      87 |       60 |      50 |      87 | 14-16,62-65,76-81                                    
 src/components/privatechat     |   74.83 |       50 |      25 |   74.83 |                                                      
  PrivateMessage.tsx            |   74.83 |       50 |      25 |   74.83 | 47-51,54-78,104-107,125-129                          
 src/components/terminalchat    |   78.06 |    38.88 |   66.66 |   78.06 |                                                      
  TerminalComponent.tsx         |   69.23 |     62.5 |      50 |   69.23 | 27-31,42-46,51-67,84-96                              
  UsersOnline.tsx               |   95.45 |       20 |     100 |   95.45 | 35-37                                                
 src/context                    |   43.24 |      100 |      50 |   43.24 |                                                      
  AuthProvider.tsx              |   43.24 |      100 |      50 |   43.24 | 33-74                                                
 src/hook                       |   95.23 |      100 |     100 |   95.23 |                                                                                                            
  retrieveData.hook.ts          |   91.66 |      100 |     100 |   91.66 | 13-14                                                
 src/models                     |   96.52 |      100 |    7.69 |   96.52 |                                                      
  db_computeList.ts             |   95.57 |      100 |       0 |   95.57 | 18,37,56,75,98,121,144,163,182,205,232,271           
  db_computers.ts               |     100 |      100 |     100 |     100 |                                                      
 src/pages                      |   48.41 |       50 |   15.38 |   48.41 |                                                      
  Home.tsx                      |   96.07 |      100 |   33.33 |   96.07 | 27-28,31-32                                          
  Login.tsx                     |   67.21 |       25 |   14.28 |   67.21 | 42-47,51-74,77-99,122-124,141-142,159-160            
  Online.tsx                    |   14.74 |      100 |       0 |   14.74 | 40-276                                                                                                     
  Profile.tsx                   |    6.94 |      100 |       0 |    6.94 | 9-142                                                
  Subscribe.tsx                 |   69.17 |       25 |    7.69 |   69.17 | 57-62,65-89,92-96,99-137,151,169-170,201-202,258-263 
 src/pages/volets               |   49.82 |       80 |   42.85 |   49.82 |                                                      
  VoletLeft.tsx                 |   39.01 |    66.66 |      20 |   39.01 | 21-22,25-38,43-117,151-170                           
  VoletRight.tsx                |   67.56 |    85.71 |     100 |   67.56 | 28-63                                                
 src/services                   |   44.16 |      100 |    12.5 |   44.16 |                                                      
  authentication-service.ts     |   35.29 |      100 |      50 |   35.29 | 7-17                                                 
  serviceConfirm.ts             |   37.93 |      100 |       0 |   37.93 | 10-21,25-36,39-50                                    
  servicePrivate.ts             |   45.71 |      100 |       0 |   45.71 | 8-14,17-28                                           
  serviceRouting.ts             |   46.45 |      100 |   14.28 |   46.45 | 25-35,39-49,53-63,67-77,81-92,95-106                 
  serviceTerminal.ts            |   48.64 |      100 |       0 |   48.64 | 9-15,19-30                                           
--------------------------------|---------|----------|---------|---------|-------------------------------------------
