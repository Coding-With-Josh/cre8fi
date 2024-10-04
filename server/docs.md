user = CustomUser.objects.get(id=user_id)
followers = user.followers.all()  # Get all followers
following = user.following.all()   # Get all users this user is following




post = Post.objects.get(id=post_id)
comments = post.comments.all()

comment = Comment.objects.get(id=comment_id)
replies = comment.replies.all()



Create: POST /api/users/ – Create a new user.
Update: PUT /api/users/<id>/ – Update a user by ID.
Delete: DELETE /api/users/<id>/ – Delete a user by ID.
Retrieve: GET /api/users/<id>/ – Retrieve a single user by ID.
List: GET /api/users/ – Retrieve a list of all users.


METHODS .....................
POST ---------------- To create   
PUT  ----------------- To Update uses id <id>
DELETE ---------------- To delete uses id <id>
Get ------------------- To View



REQUIRED LINKS FOR USERS
1. GET /account/users/ – Retrieve a list of all users.
2. GET /account/users/<id>/ – Retrieve a single user by ID.
3. POST /account/users/ – Create a new user.
4. PUT /account/users/<id>/ – Update a user by ID.
5. DELETE /account/users/<id>/ – Delete a user by ID.
6. POST /account/follow/<id>/ – Follow a user
7. POST /account/unfollow/<id>/ – Unfollow a user
6. GET /account/followers/ – Get Followers of  a user
7. GET /account/following/ – Get List of users a user follow










