def barplot_multiple_choice(df, column_start = '', title = '', color = 'rgb(255, 65, 54)',width= 1000, height=400):
    """Selection_choice_bar_plot: For Multplie choice questions"""
    columns = df.columns[df.columns.str.startswith(column_start)]

    # Count options
    option_count = pd.DataFrame()
    for c in columns[:-1]:
        value = df[c].value_counts()
        option_count = pd.concat([option_count,value])

    option_count = option_count.rename(columns={0:'Count'})
    option_count = option_count.sort_values(by='Count')
    tmp_per = round(option_count * 100/ option_count.sum(), 2)
    tmp_per = [str(v)+' %' for v in  tmp_per['Count']]
    
    # Bar Plot
    trace1 = go.Bar(x = option_count['Count'].values, y = option_count.index, orientation='h',
                    text = tmp_per, textposition='inside',
                    marker=dict(color= option_count['Count'].values, colorscale = 'Rainbow', 
                               line=dict(color='rgb( 127, 140, 141)',width=2),)
                   )
    
    # Layout
    layout = dict(
            title=title,
            width = width,
            height = height,
            yaxis = dict(
                automargin=True,
                showticklabels=True,
            ),
            paper_bgcolor='rgb(251, 252, 252)',
            plot_bgcolor='rgb(251, 252, 252)'
            )
    fig = {'data':[trace1], 'layout':layout}
    py.iplot(fig)

def get_option_count(df, question_no):
    columns = non_student_df.columns[non_student_df.columns.str.startswith(question_no)]
    option_count = pd.DataFrame()
    for c in columns[:-1]:
        value = df[c].value_counts()
        option_count = pd.concat([option_count,value])

    option_count = option_count.rename(columns={0:'Count'})
    option_count = option_count.sort_values(by='Count', ascending=False)
    option_count["Count"] = option_count["Count"].astype(int)
    return option_count