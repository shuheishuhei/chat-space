# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|nickname|string|null: false|
### Association
- has_many :texts
- has_many :comments
- has_many :groups
- has_many  :groups, thorough:  :users_groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|user_id|integer|null: false|
### Association
- has_many :users
- has_many  :users, through:  :users_groups


## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
###Association
- belong_to :group
- belong_to :user

## textsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|string||
### Association
- belongs_to :user
- has_many :comments
- has many :texts_tags
- has many  :tags, through:  :texts_tags 

|user_id|integer|null: false, foreign_key: true|
### Association
- belong_to :user
- has_many :comments
- has_many :texts_tags
- has_many  :texts through:  :texts_tags

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text||
|user_id|integer|null: false, foreign_key: true|
|text_id|integer|null: false, foreign_key: true|
### Association
- belong_to :user
- belong_to :text

## tagsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null:false|
### Association
- has_many :texts_tags
- has_many  :texts, through:  :texts_tags

## texts_tagテーブル
|------|----|-------|
|text_id|integer|null: false, foreign_key: true|
|tag_id|integer|null: false, foreign_key: true|
### Association
- belong_to :text
- belong_to :tag







This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
