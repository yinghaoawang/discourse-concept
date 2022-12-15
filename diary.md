# Code Diary

### 12/14/22
#### Time
- 1 hour planning
- 1 hour setting up tailwind
- 30 mins frontend sidebar icons
- 30 mins frontend sidebar tooltip
- 30 mins frontend content pane
- 3 hour frontend right sidebar
#### Plan
Create frontend for chat app (Discord clone)
- Login/Signup
- Authenticated
    - Sidebar
        - Buttons for DMs, servers, create server, explore public servers
    - Pages
        - DMs
            - Inner left sidebar - name of people who sent DMs
            - Content
                - All friends
                - DMs
        - Server
            - Public or private
            - Inner left sidebar
                - If admin/mod
                    - Invite people
                - If admin
                    - Delete server
                - Channels
            - Inner right sidebar - users in server
                - Separators
                    - Admin, Mod, User, Banned
                - Click on user
                    - Tooltip
                        - Send friend request
                        - Message person
                        - View profile
            - Content
                - Per channel
                    - Messages
                        - Click on user who sent message
                            - Tooltip (see above)
                    - Message box to send message
        - Create server
            - Name of server
            - Description
            - Public or private
            - Upload icon image for server
            - Upload cover photo for server
        - Explore servers
            - Content
                - Header - search servers
                - Communities as cards (filtered by search)
                    - Cover photo, icon, title, description, users online, total members