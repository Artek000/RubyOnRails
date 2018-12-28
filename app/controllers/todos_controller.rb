class TodosController < ApplicationController

  def new
    @todo = Todo.new
  end

  def create
    @todo = Todo.new(todo_params)
    @todo.save
    redirect_back fallback_location: home_path
  end

  private def todo_params
    params.require(:todoCreate).permit(:text, :project_id)
  end

end
