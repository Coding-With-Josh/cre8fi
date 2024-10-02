user = CustomUser.objects.get(id=user_id)
followers = user.followers.all()  # Get all followers
following = user.following.all()   # Get all users this user is following




post = Post.objects.get(id=post_id)
comments = post.comments.all()

comment = Comment.objects.get(id=comment_id)
replies = comment.replies.all()


""""
Create: POST /api/users/ – Create a new user.
Update: PUT /api/users/<id>/ – Update a user by ID.
Delete: DELETE /api/users/<id>/ – Delete a user by ID.
Retrieve: GET /api/users/<id>/ – Retrieve a single user by ID.
List: GET /api/users/ – Retrieve a list of all users.
""""


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


Stories 
1. GET /add/stories/ – Retrieve a list of all stories.  
2. GET /add/stories/<id>/ – Retrieve a single story by ID.
3. POST /add/stories/ – Create a new story.
4. PUT /add/stories/<id>/ – Update a story by ID.  
5. DELETE /add/stories/<id>/ Delete a story by id 


Post
1. GET /posts/ - Retrieve a list of all posts
2. GET /posts/<id>/ - Retrieve a single post by ID
3. POST /posts/ - Create a new post
4. PUT /posts/<id>/ - Update a post by ID
5. DELETE /posts/<id>/ - Delete a post by ID


Comments
GET /posts/{post_id}/comments/ (List all comments for a post)
POST /posts/{post_id}/comments/ (Create a new comment on a post)
PUT /posts/{post_id}/comments/{comment_id}/ (Update a specific comment)
DELETE /posts/{post_id}/comments/{comment_id}/ (Delete a specific comment)

Replies
GET /comments/{comment_id}/replies/ (List all replies for a comment)
POST /comments/{comment_id}/replies/ (Create a new reply to a comment)
PUT /comments/{comment_id}/replies/{reply_id}/ (Update a specific reply)
DELETE /comments/{comment_id}/replies/{reply_id}/ (Delete a specific reply)


Projects

GET /user-dashboard/projects/: List all projects.
POST /user-dashboard/projects/: Create a new project.
GET /user-dashboard/projects/{project_id}/: Retrieve a specific project by id.
PUT /user-dashboard/projects/{project_id}/: Update a specific project.
PATCH /user-dashboard/projects/{project_id}/: Partially update a specific project.

MarketPlace

GET /user-dashboard/marketplace-listings/: List all marketplace listings.
POST /user-dashboard/marketplace-listings/: Create a new marketplace listing.
GET /user-dashboard/marketplace-listings/{listing_id}/: Retrieve a specific listing by id.
PUT /user-dashboard/marketplace-listings/{listing_id}/: Update a specific marketplace listing.
PATCH /user-dashboard/marketplace-listings/{listing_id}/: Partially update a specific listing.
DELETE /user-dashboard/marketplace-listings/{listing_id}/: Delete a specific listing.

Project Invitation
GET /user-dashboard/project-invitations/: List all project invitations.
POST /user-dashboard/project-invitations/: Create a new project invitation.
GET /user-dashboard/project-invitations/{invitation_id}/: Retrieve a specific invitation.
PUT /user-dashboard/project-invitations/{invitation_id}/: Update a specific project invitation.
PATCH /user-dashboard/project-invitations/{invitation_id}/: Partially update an invitation.
DELETE /user-dashboard/project-invitations/{invitation_id}/: Delete an invitation.


Activities 
GET /user-dashboard/activities/: List all activities.
POST /user-dashboard/activities/: Create a new activity.
GET /user-dashboard/activities/{activity_id}/: Retrieve a specific activity by id.
PUT /user-dashboard/activities/{activity_id}/: Update a specific activity.
PATCH /user-dashboard/activities/{activity_id}/: Partially update a specific activity.
DELETE /user-dashboard/activities/{activity_id}/: Delete a specific activity.

Earnigs/Points
GET /user-dashboard/points/: List all point records.
POST /user-dashboard/points/: Create a new point record.
GET /user-dashboard/points/{point_id}/: Retrieve a specific point record by id.
PUT /user-dashboard/points/{point_id}/: Update a specific point record.
PATCH /user-dashboard/points/{point_id}/: Partially update a specific point record.
DELETE /user-dashboard/points/{point_id}/: Delete a specific point record.


Resources 
GET /user-dashboard/resources/: List all resources.
POST /user-dashboard/resources/: Create a new resource.
GET /user-dashboard/resources/{resource_id}/: Retrieve a specific resource.
PUT /user-dashboard/resources/{resource_id}/: Update a specific resource.
PATCH /user-dashboard/resources/{resource_id}/: Partially update a specific resource.
DELETE /user-dashboard/resources/{resource_id}/: Delete a specific resource.

Payments 
GET /user-dashboard/payments/: List all payments.
POST /user-dashboard/payments/: Create a new payment.
GET /user-dashboard/payments/{payment_id}/: Retrieve a specific payment by id.
PUT /user-dashboard/payments/{payment_id}/: Update a specific payment.
PATCH /user-dashboard/payments/{payment_id}/: Partially update a payment.
DELETE /user-dashboard/payments/{payment_id}/: Delete a payment.


Budgets
GET /user-dashboard/budgets/: List all budgets.
POST /user-dashboard/budgets/: Create a new budget.
GET /user-dashboard/budgets/{budget_id}/: Retrieve a specific budget by id.
PUT /user-dashboard/budgets/{budget_id}/: Update a specific budget.
PATCH /user-dashboard/budgets/{budget_id}/: Partially update a specific budget.
DELETE /user-dashboard/budgets/{budget_id}/: Delete a specific budget.