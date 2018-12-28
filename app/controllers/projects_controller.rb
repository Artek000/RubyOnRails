class ProjectsController < ApplicationController
  def index
    @project = Project.all.order("id ASC")
  end
end
