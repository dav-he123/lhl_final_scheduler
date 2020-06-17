class User < ApplicationRecord
  acts_as_token_authenticatable
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
        #  :jwt_authenticatable, jwt_revocation_strategy: JwtBlacklist
  has_many :reservations, dependent: :destroy
  has_many :memberships, dependent: :destroy
  has_many :events, through: :reservations
  has_many :groups, through: :memberships

  validates :name, :password, :email, presence: true
  validates_uniqueness_of :email
end
